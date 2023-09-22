import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import WeaHead from "../components/WeaHead";
import WeaContent from "../components/WeaContent";
import BackGround from "../components/BackGround";

const GlobalStyle = createGlobalStyle`
  body {
    background: #00E06D;
  }
`;

function Cloudy() {
    return (
        <>
            <GlobalStyle />
            <BackGround />
            <WeaHead />
            <WeaContent />
        </>
    );
}

export default Cloudy;
