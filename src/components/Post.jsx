import React from "react";
import { styled } from "styled-components";




const Container = styled.div`
  background-color: lightgray;
  border: 1px solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  max-width: 200px;
`;


// function Post (props) {
const Post = (props) => {
    
  return (
    <>

      <Container>
        {/* use map to generate UL of all names */}
        <p>{props.dataProp.name}</p>
      </Container>
    </>
  );
};
//! ^^^ FINISH ABOVE EDIT WITH MAP AND UL to complete***


export default Post;
