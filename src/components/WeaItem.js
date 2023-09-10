import React from "react";
import styled from "styled-components";
import SunnyIcon from "./WeaIcon";
import { WiDaySunny } from "react-icons/wi";

const WeaItemBlock = styled.div`
    background-color: #fff;
    color: #000;
    width: 4rem;
    height: 8rem;
    border-radius: 999rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div:first-child {
        width: 5rem;
        height: 9.25rem;
        font-size: 1.25rem;
    }
    .icon {
        width: 2rem;
        height: 2rem;
    }
`;

function WeaItem() {
    return (
        <WeaItemBlock>
            <p>수</p>
            <SunnyIcon />
            {/* <WiDaySunny className="icons" /> */}
            <p>30˚</p>
        </WeaItemBlock>
    );
}

export default WeaItem;