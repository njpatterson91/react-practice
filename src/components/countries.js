import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CountryCard from "./countrycard";

const FlexBox = styled.div`
  max-width: 20%;
  margin: 5%;
`;
export default function Countries(props) {
  const { countryData } = props;
  return countryData.map((data) => {
    return (
      <FlexBox>
        <div>
          <CountryCard key={data.name} data={data} />
        </div>
      </FlexBox>
    );
  });
}
