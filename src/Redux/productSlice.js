import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const STATUS = Object.freeze({
    IDEL: 'idel',
    LOADING: 'loading',
    ERROR: 'error'
})
const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUS.IDEL
    },
    // reducers: {
    //     addProduct: (state, action) => {
    //         state.data = action.payload
    //     },
    //     setStatus: (state, action) => {
    //         state.status = action.payload
    //     }
    // },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                state.status = STATUS.LOADING
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDEL
            })
            .addCase(fetchProduct.rejected,(state,action)=>{
                state.status=STATUS.ERROR
            })
    }
});

export const { addProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;


// thunk 
export const fetchProduct = createAsyncThunk('products/fetch', async () => {
    const data = await fetch('https://dummyjson.com/products');
    const json = await data.json();
    return json.products
})


// OLD THUNK WAY 👇

// export function fetchProduct() {
//     return async function fetchProductsThunk(dispatch, getState) {
//         dispatch(setStatus(STATUS.LOADING))
//         try {
//             const data = await fetch('https://dummyjson.com/products');
//             const json = await data.json();
//             dispatch(addProduct(json.products))
//             dispatch(setStatus(STATUS.IDEL))
//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUS.ERROR))
//         }

//     }
// }


