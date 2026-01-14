// src/components/PokemonList.tsx
import PokemonCard from "./PokemonCard";
import type { Pokemon } from "../types/Pokemon";

interface PokemonListProps {
    pokemons: Pokemon[];
    onBuy: (pokemon: Pokemon) => void;
}

function PokemonList({ pokemons, onBuy }: PokemonListProps) {
    return (
        <div className="pokemon-list">
            {pokemons.map(pokemon => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    onBuy={onBuy}
                />
            ))}
        </div>
    );
}

export default PokemonList;
