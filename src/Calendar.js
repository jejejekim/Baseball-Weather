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

const Calendar = ({ location }) => {
    //날짜
    const date = new Date();
    const year = date.getFullYear(); //년
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1; //월(0부터 시작하기 때문에 +1)
    const today = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(); //일
    const day = date.getDay(); //요일

    // const lastday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const week = ["일", "월", "화", "수", "목", "금", "토"]; //일주일
    //날씨 정보가 들어갈 빈 리스트
    const weekList = [];
    //테스트용 weather
    const weeklyWeather = ["Rain", "Clear", "Clouds", "Clouds", "Clouds", "Rain", "Clouds"];

    for (let i = 0; i < 7; i++) {
        weekList.push(
            <WeaItem
                day={week[(i + day) % 7]}
                tempNum="23"
                weather={weeklyWeather[i]}
                key={i}
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
