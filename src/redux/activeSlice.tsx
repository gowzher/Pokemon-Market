import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { PokemonType } from '../types/Pokemon'
import { pokemons } from '../data/Pokemons';


export interface activeState {
    activeType: PokemonType
}

const initialState: activeState = {
    activeType: "All",
}

export const filteredPokemons = (activeType: PokemonType) => activeType === "All"
    ? pokemons
    : pokemons.filter(pokemon => pokemon.type === activeType);


export const activeSlice = createSlice({
    name: 'active',
    initialState,
    reducers:
    {
        setActiveType: (state, action: PayloadAction<PokemonType>) => {
            state.activeType = action.payload;
        },
    }
})

export const { setActiveType } = activeSlice.actions
export default activeSlice.reducer

