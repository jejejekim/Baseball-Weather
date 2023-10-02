import React from "react";
import styled from "styled-components";
import "../App.scss";
import { ReactComponent as IcLoc } from "../assets/SVG/icLoc.svg";
import { today } from "../Calendar";

const WeaHeadBlock = styled.div`
    position: fixed;
    top: 1.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem;
    padding: 0rem 6rem 0rem 0rem;
    color: #000;

    .icon {
        width: 3.75rem;
        height: 3.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        // background-color: #f0ff49;
        border-radius: 100%;
    }

    .location {
        display: flex;
        gap: 0.25rem;
        flex-direction: row;
        align-items: center;
    }

    .timeLocation {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

function WeaHead({ month, today, day, location }) {
    return (
        <WeaHeadBlock>
            {/* <SunnyIcon /> */}
            <div className="timeLocation">
                <p className="time">
                    {month}/{today}({day})
                </p>
                <div className="location">
                    <IcLoc />
                    <p>{location}</p>
                </div>
            </div>
        </WeaHeadBlock>
    );
}

export default WeaHead;
