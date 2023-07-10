// import logo from './logo.svg';
// import './App.css';
import Post from "./components/Post";
import { styled } from "styled-components";
import React from "react";
// import Container from "./components/Post";
// import FetchButton from "./components/Post";
import { useEffect, useState } from "react";

function App() {
  const FetchButton = styled.button`
    background-color: darkgray;
    border: none;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: row;
    margin: 10px 50px;
    max-width: 200px;
    max-height: 75px;
    justify-content: center;

    /* &:active {
      {transform: translateY(4px)}
    }  */
  `;

  const [pokemonData, setPokemonData] = useState([]);

  const getPokemonList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => setPokemonData(data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <FetchButton onClick={getPokemonList} className="activate">
        fetch
      </FetchButton>

      <Post dataProp={pokemonData} />
    </div>
  );
}

export default App;
