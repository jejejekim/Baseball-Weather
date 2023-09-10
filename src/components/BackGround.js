import React from "react";
import styled from "styled-components";
import { ReactComponent as Ground } from "../assets/SVG/Ground.svg";

const BackGroundBlock = styled.div`
    .g {
        width: 100%;
        height: 100%;
        bottom: 0;
        right: 0;
    }
`;

// const Ground = styled.div`
//     width: 100%;
// `;

function BackGround() {
    return (
        <BackGroundBlock>
            <Ground className="g" />
        </BackGroundBlock>
    );
}

export default BackGround;
