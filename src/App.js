import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [pokemon, setPokemon] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value);
  };

  return (
    <div className="app">
      <h2>POKES LIBRARY</h2>
      <input
        value={pokemon}
        onChange={handleChange}
        placeholder="Enter a pokemon name"
      />
      <div className="cards">
        {pokemons
          .filter((item) =>
            item.name.toLowerCase().includes(pokemon.toLowerCase())
          )
          .map((item) => (
            <CardItem key={item.name} name={item.name} sprite={item.sprite} />
          ))}
      </div>
    </div>
  );
}
