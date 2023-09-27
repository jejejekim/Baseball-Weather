import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "./App.scss";
import WeaHead from "./components/WeaHead";
import WeaContent from "./components/WeaContent";
import BackGround from "./components/BackGround";
import Sunny from "./pages/Sunny";
import Rainy from "./pages/Rainy";
import Cloudy from "./pages/Cloudy";

const GlobalStyle = createGlobalStyle`
  body {
    background: #00E06D;
  }
`;

const WeaBlock = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 100;
    position: fixed;
    background-color: rgba(0, 57, 159, 0.2);
    left: 0;
    top: 0;
`;

function App() {
    const [weatherRes, setWeatherRes] = useState("");

    const getWeather = async (lat, lon) => {
        try {
            const apiKey = "135fc4078d2369b399cd82144775cf19";
            const req = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
            );
            const res = await req.json();

            //넘겨 줄 정보 세팅
            setWeatherRes({
                temp: res.main.temp,
                weather: res.weather[0].main,
            });

            // const weather = res.weather[0].main; //날씨
            // const temp = Math.round(res.main.temp); //온도(반올림)
        } catch (err) {
            console.log(err);
        }
    };

    const success = ({ coords, timestamp }) => {
        // console.log(coords);
        const date = new Date(timestamp);
        const year = date.getFullYear(); //년
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1; //월(0부터 시작하기 때문에 +1)
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(); //일
        const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(); //시
        const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(); //분

        // document.querySelector(
        //     ".contents .time"
        // ).innerHTML = `${hour}:${minute} ${month}/${day}/${year}`;
        // document.querySelector(".calendar .month").innerHTML = month;
        // document.querySelector(".calendar .day").innerHTML = day;

        //겟 웨더 함수가 실행될 때 위도, 경도를 불러옴
        getWeather(coords.latitude, coords.longitude);
    };

    const getUserLocation = () => {
        if (!navigator.geolocation) {
            alert("위치 정보가 지원되지 않습니다");
        } else {
            //위치 정보를 받아오는 데에 성공했을 때 succes인자가 무조건 있어야 함
            navigator.geolocation.getCurrentPosition(success);
        }

        // navigator.geolocation.getCurrentPosition((position) => {
        //     let lat = position.coords.latitude;
        //     let lon = position.coords.longitude;

        //     getWeather(lat, lon);
        // });
    };

    getUserLocation();

    return (
        <>
            <WeaBlock>
                <GlobalStyle />
                <WeaHead />
                {/* <WeaContent comment={"오늘... 야구할 수 있을까?"} weather={weather} /> */}
                <WeaContent weatherRes={weatherRes} />
            </WeaBlock>
            <BackGround />

            {/* <Sunny /> */}
            {/* <Rainy weatherRes={weatherRes} /> */}
            {/* <Cloudy /> */}
        </>
    );
}

export default App;
