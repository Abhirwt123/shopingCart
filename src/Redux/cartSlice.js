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
        addProductQuantity: (state, action) => {
            state = state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                } return item;
            })
        }
    }
})

export const { addItem, removeItem, addProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;