// src/components/PokemonCard.tsx
import type { Pokemon } from "../types/Pokemon";
import "../css/pokemonCard.css"
import { TbPokeball } from "react-icons/tb";

interface PokemonCardProps {
    pokemon: Pokemon;
    onBuy: (pokemon: Pokemon) => void;
}

function PokemonCard({ pokemon, onBuy }: PokemonCardProps) {
    return (
        <div className="pokemon-card">
            <h3 className="pokemon-name">{pokemon.name}</h3>

            <p className="pokemon-description">
                {pokemon.description}
            </p>

            <span className={`pokemon-type ${pokemon.type.toLowerCase()}`}>
                {pokemon.type}
            </span>

            <div className="pokemon-footer">
                <span className="pokemon-price cart-item">
                    <TbPokeball size={25} /> {pokemon.price}
                </span>

                <button
                    className="buy-button"
                    onClick={() => onBuy(pokemon)}
                >
                    Satın Al
                </button>
            </div>
        </div>
    );
}

export default PokemonCard;
