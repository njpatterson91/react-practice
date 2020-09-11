import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import styled from "styled-components";

const FlexBox = styled.div`
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

ReactDOM.render(
  <React.StrictMode>
    <FlexBox>
      <App />
    </FlexBox>
  </React.StrictMode>,
  document.getElementById("root")
);
