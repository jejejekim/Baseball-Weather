import React from "react";
import styled from "styled-components";
import { ReactComponent as Field } from "../assets/SVG/Field.svg";

const BackGroundBlock = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;

    .field {
        position: absolute;
        width: 29.25rem;
        height: 29.625rem;
        right: 0;
        bottom: 0;
    }
`;

function BackGround() {
    return (
        <BackGroundBlock>
            <Field className="field" />
        </BackGroundBlock>
    );
}

export default BackGround;
