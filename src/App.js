import React, { useState, useEffect } from "react";
import "./App.css";
import Country from "./components/countries";
import Top from "./components/titlebar";
import styled from "styled-components";
import axios from "axios";

const MainFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: 100%;
`;

function App() {
  const [region, setRegion] = useState("europe");
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/region/${region}`)
      .then((res) => {
        setCountryData(res.data);
      });
    console.log(countryData);
  }, [region]);
  return (
    <div>
      <Top setRegion={setRegion} />
      <MainFlex>
        <Country countryData={countryData} />
      </MainFlex>
    </div>
  );
}

export default App;
