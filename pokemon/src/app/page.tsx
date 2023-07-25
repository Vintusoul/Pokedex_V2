"use client";
import { useState, useEffect } from "react";
import Card from "../components/card";
import { Pokemon } from "../interfaces/pokemon";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  const getAllPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const pokemon = await response.json();
    console.log(pokemon.results);
    return setPokemon(pokemon.results);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 flex justify-center content-center">
        {pokemon.map((item: Pokemon) => (
          <Card pokemon={item} />
        ))}
      </div>
    </div>
  );
}
