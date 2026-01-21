import type { Pokemon } from "../types/Pokemon";
import "../css/pokemonCard.css"
import { TbPokeball } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";


interface PokemonCardProps {
    pokemon: Pokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {


    const dispatch = useDispatch();

    return (
        <div className="pokemon-card">
            <h3 className="pokemon-name">{pokemon.name}</h3>

            <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />

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
                    onClick={() => dispatch(addToCart(pokemon))}
                >
                    Satın Al
                </button>
            </div>
        </div>
    );
}

export default PokemonCard;
