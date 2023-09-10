import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import "./App.scss";
import WeaHead from "./components/WeaHead";
import WeaContent from "./components/WeaContent";
import BackGround from "./components/BackGround";

const GlobalStyle = createGlobalStyle`
  body {
    background: #1F9A00;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <BackGround />
            <WeaHead />
            <WeaContent />
        </>
    );
}

export default App;
