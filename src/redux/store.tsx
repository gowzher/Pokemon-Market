import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cartSlice"
import activeReducer from "./activeSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        active: activeReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch