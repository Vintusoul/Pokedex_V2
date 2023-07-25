import { Pokemon } from "../interfaces/pokemon";
import React from "react";
import "./card.scss";

const Card = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.url.split("/")[6]
          }.png`}
          alt={pokemon.name}
        />
      </div>
      <div className="card-content">
        <div className="content">
          <h4 className="card-title">{pokemon.name}</h4>
          <span className="card-label">{pokemon.type}</span>
        </div>
        <div className="card-xp">
          <div>
            <p>Experience</p>
          </div>
          <div>
            <p>{Math.floor(Math.random() * 1000)}/1000</p>
          </div>
        </div>
        <div className="card-progressbar">
          <div className="card-progressbar-fill">
            <div className="card-progressbar-fill-inner"></div>
          </div>
        </div>

        <a href="/">Click for more info...</a>
      </div>
    </div>
  );
};

export default Card;
