import { createSlice } from "@reduxjs/toolkit";
import product from '../data/index.json'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        product: product
    },
    reducers: {
        increaseCounter: (state, action) => {
            state.count += 1
        }
    }
})

export const { increaseCounter } = counterSlice.actions
export const counterReducer = counterSlice.reducer