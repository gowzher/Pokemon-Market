import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Pokemon } from '../types/Pokemon'


export interface cartState {
    cart: Record<number, number>
}

const initialState: cartState = {
    cart: {},
}

export const selectTotalCount = (state: { cart: cartState }) =>
    Object.values(state.cart.cart).reduce((sum, count) => sum + count, 0);

export const selectTotalPrice = (state: { cart: cartState }, allPokemons: Pokemon[]) => {
    return Object.entries(state.cart.cart).reduce((sum, [id, count]) => {
        const pokemon = allPokemons.find(p => p.id === Number(id));
        return sum + (pokemon ? pokemon.price * count : 0);
    }, 0);
};

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:
    {
        addToCart: (state, action: PayloadAction<Pokemon>) => {
            const pokemonId = action.payload.id;
            if (state.cart[pokemonId]) {
                state.cart[pokemonId] += 1;
            } else {
                state.cart[pokemonId] = 1;
            }
        },
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer

