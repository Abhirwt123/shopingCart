import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload)
        },
        removeItem: (state, action) => {
            return state.filter((product) => product.id !== action.payload)
        },
        increaseProductQuantity: (state, action) => {
            const productId = action.payload;
            const productToUpdate = state.find((product) => product.id === productId);
            if (productToUpdate) {
                productToUpdate.quantity = (productToUpdate.quantity || 0) + 1;
            }
        },
        decreaseProductQuantity: (state, action) => {
            const productId = action.payload;
            const productToUpdate = state.find((product) => product.id === productId);
            if (productToUpdate && productToUpdate.quantity > 0) {
                productToUpdate.quantity -= 1;
            }
        }
    }
})

export const { addItem, removeItem, increaseProductQuantity,decreaseProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;