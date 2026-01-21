export type PokemonType =
    | "All"
    | "Fire"
    | "Water"
    | "Grass"
    | "Electric"
    | "Normal";

export interface Pokemon {
    id: number;
    name: string;
    description: string;
    type: PokemonType;
    price: number;
    image: string;
}

