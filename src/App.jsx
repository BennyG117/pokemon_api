// import logo from './logo.svg';
// import './App.css';
import Post from "./components/Post";
import { styled } from "styled-components";
import React from "react";
import Container from "./components/Post";
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
    margin: 10px;
    max-width: 200px;
    max-height: 75px;
    justify-content: center;
  `;

  const [pokemonData, setPokemonData] = useState([]);

  const getPokemonList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((err) => {
        console.log(err);
      });
  };




  return (
    <div>
      <FetchButton onClick={getPokemonList}>
        fetch
      </FetchButton>

      <Post dataProp={pokemonData} />
      {/* 
  <Container>
  <FetchButton onClick={getPokemonList}/>
  <Container/> */}
    </div>
  );
}

export default App;
