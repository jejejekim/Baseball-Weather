import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Sun } from "../assets/SVG/sun.svg";
import { ReactComponent as Rain } from "../assets/SVG/rain.svg";
import { ReactComponent as Cloud } from "../assets/SVG/cloud.svg";
import { WeaItemSunny, WeaItemRainy, WeaItemCloudy } from "./WeaItem";

const WeaContentBlock = styled.div`
    position: fixed;
    bottom: 2.25rem;
    margin-left: 3rem;

    h1,
    h2 {
        font-weight: 700;
    }

    h1 {
        position: absolute;
        line-height: 1.1;
        font-size: 13.75rem;
        font-family: "Jockey One";
        color: #000;
    }

    h2 {
        line-height: 1.2;
        font-size: 2.25rem;
        color: #000;
        margin-bottom: 1rem;
    }

    .sun {
        width: 14.313rem;
        height: 14.313rem;
        margin-left: 7.3rem;
        bottom: 3.6rem;
    }

    .tempreture {
        position: relative;
    }

    .summary {
        font-weight: 300;
    }

    .weeklyWeather {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 1.125rem;
        //갭으로 사이 공백 처리
        gap: 0.5rem;
    }

    .test {
        color: red;
    }

    // > div:first-child {
    //     width: 5rem;
    //     height: 9.25rem;
    //     background: rgba(255, 255, 255);
    //     font-size: 1.25rem;
    // }
`;

function WeaContent() {
    return (
        <WeaContentBlock>
            <div className="tempreture">
                <h1>24˚</h1>
                {/* <Sun className="sun" /> */}
                {/* <Rain className="sun" /> */}
                <Cloud className="sun" />
            </div>
            <h2 className="summary">야구 보러가기 딱 좋은 날씨에요!</h2>
            <div className="weeklyWeather">
                <WeaItemSunny day={"수"} temp={30} num={1} />
                <WeaItemRainy day={"목"} temp={28} />
                <WeaItemRainy day={"금"} temp={27} />
                <WeaItemCloudy day={"토"} temp={27} />
                <WeaItemCloudy day={"일"} temp={28} />
                <WeaItemSunny day={"화"} temp={25} />
            </div>
        </WeaContentBlock>
    );
}

export default WeaContent;
