import PokemonCard from "./PokemonCard";
import { filteredPokemons } from "../redux/activeSlice";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";





function PokemonList() {
    const activeType = useSelector((state: RootState) => state.active.activeType);
    const pokemons = filteredPokemons(activeType);

    return (
        <div className="pokemon-list">
            {pokemons.map(pokemon => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                />
            ))}
        </div>
    );
}

export default PokemonList;
