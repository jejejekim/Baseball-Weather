import React from "react";
import styled from "styled-components";
import "../App.scss";

const WeaHeadBlock = styled.div`
    position: fixed;
    top: 2.25rem;
    width: 16.438rem;
    height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem;
    margin-left: 3rem;
    color: #fff;

    .icon {
        width: 3.75rem;
        height: 3.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0ff49;
        border-radius: 100%;
    }

    .timeLocation {
        height: 3.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

function WeaHead() {
    return (
        <WeaHeadBlock>
            <div class="icon"></div>
            <div className="timeLocation">
                <p className="time">8/16(수)</p>
                <p className="location">롯데자이언츠상동야구장</p>
            </div>
        </WeaHeadBlock>
    );
}

export default WeaHead;
