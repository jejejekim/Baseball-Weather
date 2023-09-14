import React from "react";
import styled from "styled-components";
import "../App.scss";
import SunnyIcon from "./WeaIcon";

const WeaHeadBlock = styled.div`
    position: fixed;
    top: 2.25rem;
    width: 100%;
    // height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem;
    padding: 0rem 2.5rem 0rem 2.5rem;
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

    .timeLocation {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

function WeaHead() {
    return (
        <WeaHeadBlock>
            {/* <SunnyIcon /> */}
            <div className="timeLocation">
                <p className="time">8/16(수)</p>
                <p className="location">롯데자이언츠상동야구장</p>
            </div>
        </WeaHeadBlock>
    );
}

export default WeaHead;
