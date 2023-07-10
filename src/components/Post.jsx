import React from "react";
import { styled } from "styled-components";




const Container = styled.div`
  background-color: lightgray;
  border: 1px solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:5px 50px;
  padding: 5px;
  max-width: 200px;
`;


// function Post (props) {
const Post = (props) => {
    
  return (
    <>

      <Container>
        {/* use map to generate UL of all names */}
        <ul>
            {props.dataProp.results && props.dataProp.results.map((pokemon) => (
                <li key={pokemon.name} >{pokemon.name}</li>
            ))}
        </ul>
      </Container>
    </>
  );
};
//! ^^^ FINISH ABOVE EDIT WITH MAP AND UL to complete***


export default Post;
