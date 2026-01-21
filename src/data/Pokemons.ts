import type { Pokemon } from "../types/Pokemon";
import pikachu from "../images/pikachu.png"
import charmander from "../images/charmander.png"
import squirtle from "../images/squirtle.png"
import bulbasaur from "../images/bulbasaur.png"
import eevee from "../images/eevee.png"
import jigglypuff from "../images/jigglypuff.png"
import meowth from "../images/meowth.png"
import arcanine from "../images/arcanine.png"
import chikorita from "../images/chikorita.png"
import cyndaquil from "../images/cyndaquil.png"
import gyarados from "../images/gyarados.png"
import jolteon from "../images/jolteon.png"
import luxray from "../images/luxray.png"
import psyduck from "../images/psyduck.png"
import sceptile from "../images/sceptile.png"
import snorlax from "../images/snorlax.png"




export const pokemons: Pokemon[] = [
    {
        id: 1,
        name: "Pikachu",
        description: "Electric mouse Pokémon",
        type: "Electric",
        price: 120,
        image: pikachu
    },
    {
        id: 2,
        name: "Charmander",
        description: "Fire lizard Pokémon",
        type: "Fire",
        price: 150,
        image: charmander
    },
    {
        id: 3,
        name: "Squirtle",
        description: "Tiny turtle Pokémon",
        type: "Water",
        price: 130,
        image: squirtle
    },
    {
        id: 4,
        name: "Bulbasaur",
        description: "Seed Pokémon",
        type: "Grass",
        price: 140,
        image: bulbasaur
    },
    {
        id: 5,
        name: "Eevee",
        description: "Evolution Pokémon",
        type: "Normal",
        price: 200,
        image: eevee
    },
    {
        id: 6,
        name: "Jigglypuff",
        description: "Singing Pokémon",
        type: "Normal",
        price: 110,
        image: jigglypuff
    },
    {
        id: 7,
        name: "Meowth",
        description: "Scratch cat Pokémon",
        type: "Normal",
        price: 100,
        image: meowth
    },
    {
        id: 8,
        name: "Snorlax",
        description: "Sleeping giant Pokémon",
        type: "Normal",
        price: 300,
        image: snorlax
    },
    {
        id: 9,
        name: "Cyndaquil",
        description: "Fire Mouse Pokémon",
        type: "Fire",
        price: 160,
        image: cyndaquil
    },
    {
        id: 10,
        name: "Arcanine",
        description: "Legendary Pokémon",
        type: "Fire",
        price: 450,
        image: arcanine
    },
    {
        id: 11,
        name: "Psyduck",
        description: "Duck Pokémon",
        type: "Water",
        price: 125,
        image: psyduck
    },
    {
        id: 12,
        name: "Gyarados",
        description: "Atrocious Pokémon",
        type: "Water",
        price: 550,
        image: gyarados
    },
    {
        id: 13,
        name: "Chikorita",
        description: "Leaf Pokémon",
        type: "Grass",
        price: 145,
        image: chikorita
    },
    {
        id: 14,
        name: "Sceptile",
        description: "Forest Pokémon",
        type: "Grass",
        price: 420,
        image: sceptile
    },
    {
        id: 15,
        name: "Jolteon",
        description: "Lightning Pokémon",
        type: "Electric",
        price: 380,
        image: jolteon
    },
    {
        id: 16,
        name: "Luxray",
        description: "Gleam Eyes Pokémon",
        type: "Electric",
        price: 400,
        image: luxray
    }
];
