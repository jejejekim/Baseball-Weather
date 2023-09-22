import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import "./App.scss";
import WeaHead from "./components/WeaHead";
import WeaContent from "./components/WeaContent";
import BackGround from "./components/BackGround";
import Sunny from "./pages/Sunny";
import Rainy from "./pages/Rainy";

// const GlobalStyle = createGlobalStyle`
//   body {
//     background: #00E06D;
//   }
// `;

function App() {
    return (
        <>
            {/* <Sunny /> */}
            <Rainy />
        </>
    );
}

export default App;
