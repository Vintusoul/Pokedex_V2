import React from "react";
import Card from "../components/card";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 flex ">
        <Card
          pokemon={{
            name: "Pikachu",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            type: "Electric",
          }}
        />
        <Card
          pokemon={{
            name: "Pikachu",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            type: "Electric",
          }}
        />
        <Card
          pokemon={{
            name: "Pikachu",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            type: "Electric",
          }}
        />
        <Card
          pokemon={{
            name: "Pikachu",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            type: "Electric",
          }}
        />
      </div>
    </div>
  );
}
