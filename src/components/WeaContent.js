import React from "react";
import styled from "styled-components";
import WeaItem from "./WeaItem";

const WeaContentBlock = styled.div`
    position: fixed;
    bottom: 2.25rem;
    margin-left: 3rem;

    h1,
    h2 {
        font-weight: 700;
    }

    h1 {
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

    .summary {
        font-weight: 300;
    }

    .weeklyWeather {
        // width: 28.75rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 1.125rem;
        //갭으로 사이 공백 처리
        gap: 0.5rem;
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
            <h1 className="tempreture">24˚</h1>
            <h2 className="summary">야구 보러가기 딱 좋은 날씨에요!</h2>
            <div className="weeklyWeather">
                <WeaItem day={"수"} temp={30} />
                <WeaItem day={"목"} temp={28} />
                <WeaItem day={"금"} temp={27} />
                <WeaItem day={"토"} temp={27} />
                <WeaItem day={"일"} temp={28} />
                <WeaItem day={"화"} temp={25} />
            </div>
        </WeaContentBlock>
    );
}

export default WeaContent;
