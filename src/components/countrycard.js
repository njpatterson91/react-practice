import React from "react";
import styled from "styled-components";

const CountryDiv = styled.div`
  max-width: 100%;
  border: 1px solid black;
  margin: 5% auto;
  border-radius: 10px;
  background-color: white;
  img {
    max-width: 100%;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
  }
  div {
    padding: 5%;
  }
`;

export default function Country(data) {
  return (
    <CountryDiv>
      <div>
        <h1>{data.data.name}</h1>
        <img src={data.data.flag}></img>
      </div>
    </CountryDiv>
  );
}
