// src/App.tsx
import "./App.css"
import { useState } from "react";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import { pokemons } from "./data/Pokemons";
import type { Pokemon } from "./types/Pokemon";


function App() {
  const [cart, setCart] = useState<Record<number, number>>({});

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

  return (
    <>
      <Header totalCount={totalCount} totalPrice={totalPrice} />

      <PokemonList
        pokemons={pokemons}
        onBuy={handleBuy}
      />
    </>
  );
}


export default App;
