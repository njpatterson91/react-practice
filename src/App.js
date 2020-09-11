import React, { useState, useEffect } from "react";
import logo from "./globe.svg";
import "./App.css";
import axios from "axios";
import CountryCard from "./components/countrycard";
import styled from "styled-components";
const SiteDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 30%;
  margin: 0 auto;
`;
function App() {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/region/americas`)
      .then((res) => {
        setCountryData(res.data);
      });
    console.log(countryData);
  }, []);
  return countryData.map((item) => {
    return (
      <SiteDiv>
        <div>
          <CountryCard data={item} />
        </div>
      </SiteDiv>
    );
  });
}

export default App;
