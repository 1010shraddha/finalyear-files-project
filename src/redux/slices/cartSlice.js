// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     items: [],  // Changed `cartItems` to `items`
//     totalQuantity: 0,
//     totalPrice: 0,
//     // add other properties as needed
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addItem: (state, action) => {
//             const newItem = action.payload;
//             const existingItem = state.items.find(  // Changed `cartItems` to `items`
//                 (item) => item.id === newItem.id
//             );

//             state.totalQuantity++;

//             if (!existingItem) {
//                 state.items.push({  // Changed `cartItems` to `items`
//                     id: newItem.id,
//                     productName: newItem.productName,
//                     imgUrl: newItem.imgUrl,
//                     price: newItem.price,
//                     quantity: 1,
//                     totalPrice: newItem.price
//                 });
//             } else {
//                 existingItem.quantity++;
//                 existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
//             }
            
//             state.totalAmount = state.items.reduce((total, item) => 
//                 total + Number(item.price) * Number(item.quantity), 0
//             );

//             console.log(state.totalQuantity);
//             console.log(state.items);
//             console.log(newItem);
//         },
//     },
// });

// export const { removeItem } = cartSlice.actions;
// export const cartActions = cartSlice.actions;
// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { db, auth } from "../../firebase.config";
import { doc, setDoc, getDoc } from "firebase/firestore"; // Removed unused updateDoc & arrayUnion

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

            // Save to Firestore
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

            // Save to Firestore
            saveCartToFirestore(state.items);
        },
    },
});

export const { setCart, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

// Function to save cart to Firestore
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

// Function to fetch cart from Firestore
export const fetchCartFromFirestore = async (dispatch) => {
    const user = auth.currentUser;
    if (!user) return;

    const cartRef = doc(db, "carts", user.uid);
    try {
        const cartSnap = await getDoc(cartRef);
        if (cartSnap.exists()) {
            dispatch(setCart(cartSnap.data()));
        }
    } catch (error) {
        console.error("Error fetching cart:", error);
    }
};
