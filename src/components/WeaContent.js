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
    const tempNum = weatherRes.temp; //온도
    const sky = weatherRes.sky; //하늘 상황
    // const sky2 = weatherRes.sky2;
    const pty = weatherRes.pty; //강수 상태
    const pop = weatherRes.pop; //강수 확률
    const location = weatherRes.location; //위치

    // TMP: 1시간 기온 [0]
    // SKY: 하늘상태 [5] //맑음(1), 구름많음(3), 흐림(4) //"맑음", "구름많음", "흐리고 비"
    // PTY: 강수형태 [6] //없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)
    // POP: 강수확률 [7]

    // let weather = "";

    // if (pty == 0) {
    //     if (sky == 1) {
    //         return (weather = "Clear");
    //     } else if (sky == 3 || sky == 4) {
    //         return (weather = "Clouds");
    //     }
    // } else {
    //     return weather == "Rain";
    // }

    // console.log(sky);

    return (
        <WeaContentBlock>
            <div className="temp">
                <h1 className="tempNum">{tempNum[0]}</h1>
                <h1>˚</h1>
            </div>

            <div>
                {sky[0] == 1 ? (
                    <Sun className="sun" />
                ) : pty[0] > 0 ? (
                    <Rain className="rain" />
                ) : sky[0] == 3 || sky[0] == 4 ? (
                    <Cloud className="cloud" />
                ) : (
                    <Sun className="sun" />
                )}
            </div>

            <h2 className="summary">
                {sky[0] == 1
                    ? "야구보기 딱 좋은 날씨에요!"
                    : pty[0] > 0
                    ? "오늘... 야구할 수 있을까?"
                    : sky[0] == 3 || sky[0] == 4
                    ? "시원하게 야구 볼 수 있겠다!"
                    : "기본 멘트 입니다"}
            </h2>
            <div className="weeklyWeather">
                <Calendar tempNum={tempNum} sky={sky} pty={pty} location={location} />
            </div>
        </WeaContentBlock>
    );
}

export default WeaContent;
