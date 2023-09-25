import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import WeaHead from "../components/WeaHead";
import WeaContent from "../components/WeaContent";
import BackGround from "../components/BackGround";
import { ReactComponent as Sun } from "../assets/SVG/sun.svg";

const GlobalStyle = createGlobalStyle`
  body {
    background: #00E06D;
  }
}
`;

const SunnyBlock = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 100;
    position: fixed;

    .sun {
        width: 14.313rem;
        height: 14.313rem;
        left: 10.4rem;
        top: 12.5rem;
        z-index: 10;
    }
`;

function Sunny() {
    return (
        <>
            <GlobalStyle />
            {/* <SunnyBlock>
                <Sun className="sun" />
            </SunnyBlock> */}
            <BackGround />
            <WeaHead />
            <WeaContent comment={"야구하기 딱 좋은 날씨에요!"} />
        </>
    );
}

export default Sunny;
