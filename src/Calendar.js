import React, { useState } from "react";
import styled from "styled-components";
import WeaItem from "./components/WeaItem";

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

const Calendar = () => {
    //날짜
    const date = new Date();
    const year = date.getFullYear(); //년
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1; //월(0부터 시작하기 때문에 +1)
    const today = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(); //일
    const day = date.getDay(); //요일

    const lastday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const week = ["일", "월", "화", "수", "목", "금", "토"]; //일주일

    // const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(); //시
    // const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(); //분

    // const [weaklist, setWeaklist] = useState([]);
    const weekList = [];
    //테스트용 weather
    const weeklyWeather = ["Rain", "Clear", "Clouds", "Clouds", "Clouds", "Rain", "Clouds"];

    for (let i = 0; i < 7; i++) {
        weekList.push(
            <WeaItem day={week[(i + day) % 7]} tempNum="23" weather={weeklyWeather[i]}></WeaItem>
        );
    }

    return (
        <CalBlock>
            <div className="weeklyWeather">{weekList}</div>
        </CalBlock>
    );
};

export default Calendar;
