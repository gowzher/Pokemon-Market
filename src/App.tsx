// src/App.tsx
import "./App.css"
import { useState } from "react";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import { pokemons } from "./data/Pokemons";
import type { Pokemon } from "./types/Pokemon";
import FilterBar from "./components/FilterBar";
import type { PokemonType } from "./types/Pokemon";


function App() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [activeType, setActiveType] = useState<PokemonType>("All");

  const handleBuy = (pokemon: Pokemon) => {
    setCart(prev => ({
      ...prev,
      [pokemon.id]: (prev[pokemon.id] || 0) + 1,
    }));
  };

  const totalCount = Object.values(cart).reduce(
    (sum, count) => sum + count,
    0
  );

  const totalPrice = Object.entries(cart).reduce(
    (sum, [id, count]) => {
      const pokemon = pokemons.find(p => p.id === Number(id));
      return sum + (pokemon ? pokemon.price * count : 0);
    },
    0
  );

  const filteredPokemons = activeType === "All"
    ? pokemons
    : pokemons.filter(pokemon => pokemon.type === activeType);

  return (
    <>
      <Header totalCount={totalCount} totalPrice={totalPrice} />
      <FilterBar activeType={activeType} setActiveType={setActiveType} />
      <PokemonList
        pokemons={filteredPokemons}
        onBuy={handleBuy}
      />
    </>
  );
}


export default App;
