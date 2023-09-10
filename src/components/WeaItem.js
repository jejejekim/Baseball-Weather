import React from "react";
import styled from "styled-components";
import SunnyIcon from "./WeaIcon";

const WeaItemBlock = styled.div`
    width: 4rem;
    height: 8rem;
    border-radius: 999rem;
    display: flex;
    align-items: center;

    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);
    color: #000;

    .dailyWea {
        width: 4rem;
        height: 6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

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
                <p>{day}</p>
                <SunnyIcon />
                <p>{temp}˚</p>
            </div>
        </WeaItemBlock>
    );
}

export default WeaItem;
