import { createSlice } from "@reduxjs/toolkit";
import product from '../data/index.json'

export const counterSlice = createSlice({
    name: 'products',
    initialState: {
        count: 0,
        product: product
    },
    reducers: {
        increaseProduct: (state, action) => {
            state.count += 1
        }
    }
})

export const { increaseProduct } = counterSlice.actions
export const counterReducer = counterSlice.reducer