import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import WeaHead from "../components/WeaHead";
import WeaContent from "../components/WeaContent";
import BackGround from "../components/BackGround";
import { ReactComponent as Rain } from "../assets/SVG/rain.svg";

const GlobalStyle = createGlobalStyle`
  body {
    background: #00E06D;
  }
`;

const RainyBlock = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 100;
    position: fixed;
    background-color: rgba(0, 57, 159, 0.2);
    left: 0;
    top: 0;

    // .rain {
    //     left: 11.4rem;
    //     top: 14rem;
    //     z-index: 10;
    // }
`;

function Rainy() {
    return (
        <>
            <RainyBlock>
                <GlobalStyle />
                {/* <Rain className="rain" /> */}
                <WeaHead />
                <WeaContent comment={"오늘... 야구할 수 있을까?"} />
            </RainyBlock>
            <BackGround />
        </>
    );
}

export default Rainy;
