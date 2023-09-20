import React from "react";
import styled from "styled-components";
import SunnyIcon from "./WeaIcon";
import { ReactComponent as Sun } from "../assets/SVG/sun.svg";

const WeaItemBlock = styled.div`
    width: 4.8rem;
    height: 8.8rem;
    border-radius: 50%;
    border: 2px solid #000;
    display: flex;
    align-items: center;

    background: rgba(255, 255, 255);
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);
    color: #000;

    .dailyWea {
        width: 4.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 1.2rem;
    }

    // .sun {
    //     width: 2.438rem;
    //     height: 2.438rem;
    // }

    //왜 되는 거지??????
    .icon {
        width: 2rem;
        height: 2rem;
    }
`;

function WeaItem({ day, temp }) {
    return (
        <WeaItemBlock>
            <div className="dailyWea">
                <p>{temp}˚</p>
                <Sun width={"2.438rem"} height={"2.438rem"} fill={"#FFB800"} />
                <p>{day}</p>
            </div>
        </WeaItemBlock>
    );
}

export default WeaItem;
