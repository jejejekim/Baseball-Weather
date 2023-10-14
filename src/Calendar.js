import React, { useState } from "react";
import styled from "styled-components";
import WeaItem from "./components/WeaItem";
import WeaHead from "./components/WeaHead";

const CalBlock = styled.div`
    .weeklyWeather {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 1.125rem;
        //갭으로 사이 공백 처리
        gap: 0.5rem;
    }
`;

const Calendar = ({ tempNum, sky, pty, location }) => {
    //날짜
    const date = new Date();
    const year = date.getFullYear(); //년
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1; //월(0부터 시작하기 때문에 +1)
    const today = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(); //일
    const day = date.getDay(); //요일

    // const lastday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const week = ["일", "월", "화", "수", "목", "금", "토"]; //일주일
    //통합 정보가 들어갈 빈 리스트
    const weekList = [];
    //날씨 정보가 들어갈 빈 리스트
    const weeklyWeather = [];

    for (let i = 0; i < 7; i++) {
        // SKY: 하늘상태 [5] //맑음(1), 구름많음(3), 흐림(4)
        // - 맑음
        // - 구름많음, 구름많고 비, 구름많고 눈, 구름많고 비/눈, 구름많고 소나기
        // - 흐림, 흐리고 비, 흐리고 눈, 흐리고 비/눈, 흐리고 소나기

        // PTY: 강수형태 [6] //없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)
        if (sky[i] == "1" || sky[i] == "맑음") {
            weeklyWeather.push("Clear");
        } else if (
            pty[i] > 0 ||
            sky[i] == "구름많고 비" ||
            sky[i] == "구름많고 소나기" ||
            sky[i] == "흐리고 소나기" ||
            sky[i] == "흐리고 비"
        ) {
            weeklyWeather.push("Rain");
        } else if (sky[i] == "3" || sky[i] == "4" || sky[i] == "구름많음" || sky[i] == "흐림") {
            weeklyWeather.push("Clouds");
        } else {
            weeklyWeather.push("Rain");
        }
    }

    // console.log(weeklyWeather);

    for (let i = 0; i < 7; i++) {
        weekList.push(
            <WeaItem
                day={week[(i + day) % 7]}
                tempNum={tempNum[i]}
                weather={weeklyWeather[i]}
                key={i}
                num={i}
            ></WeaItem>
        );
    }

    return (
        <CalBlock>
            <WeaHead month={month} today={today} day={week[day]} location={location} />
            <div className="weeklyWeather">{weekList}</div>
        </CalBlock>
    );
};

export default Calendar;
