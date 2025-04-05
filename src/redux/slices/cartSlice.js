
import { createSlice } from "@reduxjs/toolkit";
import { db, auth } from "../../firebase.config";
import { doc, setDoc, getDoc } from "firebase/firestore";
//import { onAuthStateChanged } from "firebase/auth"; // Added missing import

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart(state, action) {
            state.items = action.payload.items || [];
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
        },
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }

            state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);

            saveCartToFirestore(state.items);
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                state.items = state.items.filter((item) => item.id !== id);
                state.totalQuantity -= existingItem.quantity;
            }

            state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);

            saveCartToFirestore(state.items);
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
    },
});

export const { setCart, addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

const saveCartToFirestore = async (cartItems) => {
    const user = auth.currentUser;
    if (!user) return;

    const cartRef = doc(db, "carts", user.uid);

    try {
        await setDoc(cartRef, { items: cartItems }, { merge: true });
    } catch (error) {
        console.error("Error saving cart:", error);
    }
};

export const fetchCartFromFirestore = () => async (dispatch) => {
    try {
        const user = auth.currentUser; // Get user inside function
        if (!user) return;

        const cartRef = doc(db, "carts", user.uid);
        const cartSnap = await getDoc(cartRef);

        if (cartSnap.exists()) {
            dispatch(setCart(cartSnap.data()));
        } else {
            dispatch(setCart({ items: [], totalAmount: 0, totalQuantity: 0 }));
        }
    } catch (error) {
        console.error("Error fetching cart:", error);
    }
};

