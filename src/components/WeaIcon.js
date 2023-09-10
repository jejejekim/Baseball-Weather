import React from "react";
import styled from "styled-components";
import { ReactComponent as Sunny } from "../assets/SVG/sunny.svg";

const SunnyIconBlock = styled.div`
     {
        .icon {
            width: 3.75rem;
            height: 3.75rem;
            // display: flex;
            // justify-content: center;
            // align-items: center;
        }
    }
`;

function SunnyIcon() {
    return (
        <SunnyIconBlock>
            <Sunny className="icon" />
        </SunnyIconBlock>
    );
}

export default SunnyIcon;
