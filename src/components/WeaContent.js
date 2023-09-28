import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Sun } from "../assets/SVG/sun.svg";
import { ReactComponent as Rain } from "../assets/SVG/rain.svg";
import { ReactComponent as Cloud } from "../assets/SVG/cloud.svg";
import { WeaItemSunny, WeaItemRainy, WeaItemCloudy } from "./WeaItem";
import Rainy from "../pages/Rainy";
import Calendar from "../Calendar";
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

    .sun {
        width: 14.313rem;
        height: 14.313rem;
        margin-left: 9.1rem;
        bottom: 3.6rem;
    }

    .rain {
        width: 14.313rem;
        height: 14.313rem;
        margin-left: 9.1rem;
        bottom: 3.6rem;

        path {
            stroke-dasharray: 1;
            stroke-dashoffset: 1;
            animation: dash 3s ease-in-out forwards infinite;

            &:nth-child(1) {
                animation-delay: 0s;
            }
            &:nth-child(2) {
                animation-delay: 0.2s;
            }
            &:nth-child(3) {
                animation-delay: 0.6s;
            }
            &:nth-child(4) {
                animation-delay: 0.4s;
            }
        }
    }

    .cloud {
        width: 14.313rem;
        height: 14.313rem;
        margin-left: 9.2rem;
        bottom: 3.6rem;

        path {
            // stroke-dasharray: 1;
            // stroke-dashoffset: 1;
            animation: floating 10s forwards infinite;
        }
    }

    .none {
        width: 14.313rem;
        height: 14.313rem;
        margin-left: 9.2rem;
        bottom: 3.6rem;
    }

    .temp {
        position: absolute;
        display: flex;
    }

    .tempNum {
        width: 12.75rem;
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

    @keyframes dash {
        0% {
            stroke-dashoffset: 1;
            stroke-dasharray: 0.5;
        }
        60% {
            stroke-dashoffset: 0;
            stroke-dasharray: 1;
        }
        100% {
            stroke-dashoffset: 0.5;
            stroke-dasharray: 1;
        }
    }

    @keyframes floating {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        70% {
            opacity: 1;
            transform: translateZ(0);
        }
        100% {
            opacity: 0;
            transform: translateZ(0);
        }
    }
`;

function WeaContent({ weatherRes }) {
    const tempNum = Math.round(weatherRes.temp); //온도
    const weather = weatherRes.weather; //날씨
    const weeklyWeather = ["Rain", "Clear", "Clouds", "Clouds", "Clouds", "Rain", "Clouds"];

    // const weeklyWeather = [];
    // for (let i = 0; i < 7; i++) {
    //     weeklyWeather.push(

    //     );
    // }

    return (
        <WeaContentBlock>
            <div className="temp">
                <h1 className="tempNum">{tempNum}</h1>
                <h1>˚</h1>
            </div>

            <div>
                {weather == "Clear" ? (
                    <Sun className="sun" />
                ) : weather == "Rain" ? (
                    <Rain className="rain" />
                ) : weather == "Clouds" ? (
                    <Cloud className="cloud" />
                ) : (
                    <div className="none"></div>
                )}
            </div>

            <h2 className="summary">
                {weather == "Clear" ? (
                    "야구보기 딱 좋은 날씨에요!"
                ) : weather == "Rain" ? (
                    "오늘... 야구할 수 있을까?"
                ) : weather == "Clouds" ? (
                    "시원하게 야구 볼 수 있겠다!"
                ) : (
                    <div className="none"></div>
                )}
            </h2>
            <div className="weeklyWeather">
                <Calendar tempNum={tempNum} weeklyWeather={weeklyWeather} />
            </div>
        </WeaContentBlock>
    );
}

export default WeaContent;
