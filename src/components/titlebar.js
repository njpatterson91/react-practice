import React from "react";
import styled from "styled-components";

const Top = styled.div`
  background-color: white;
  text-align: center;
  h1 {
    margin: 2% auto;
    padding: 1%;
  }
  button {
    margin: 2% 2%;
    padding: 1%;
    font-size: 20px;
    border-radius: 10px;
    min-width: 15%;
  }
`;

export default function TopBar(props) {
  const { setRegion } = props;
  return (
    <Top>
      <h1>Countries of the World</h1>
      <p>Choose a Region</p>
      <button
        onClick={() => {
          setRegion("americas");
        }}
      >
        Americas
      </button>
      <button
        onClick={() => {
          setRegion("europe");
        }}
      >
        Europe
      </button>
      <button
        onClick={() => {
          setRegion("asia");
        }}
      >
        Asia
      </button>
      <button
        onClick={() => {
          setRegion("africa");
        }}
      >
        Africa
      </button>
      <button
        onClick={() => {
          setRegion("Oceania");
        }}
      >
        Oceania
      </button>
    </Top>
  );
}
