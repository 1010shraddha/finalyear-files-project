import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],  // Changed `cartItems` to `items`
    totalQuantity: 0,
    totalPrice: 0,
    // add other properties as needed
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(  // Changed `cartItems` to `items`
                (item) => item.id === newItem.id
            );

            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({  // Changed `cartItems` to `items`
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            }
            
            state.totalAmount = state.items.reduce((total, item) => 
                total + Number(item.price) * Number(item.quantity), 0
            );

            console.log(state.totalQuantity);
            console.log(state.items);
            console.log(newItem);
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
