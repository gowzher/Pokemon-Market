// src/types/Pokemon.ts
export type PokemonType =
    | "Fire"
    | "Water"
    | "Grass"
    | "Electric"
    | "Psychic";

export interface Pokemon {
    id: number;
    name: string;
    description: string;
    type: PokemonType;
    price: number;
}
