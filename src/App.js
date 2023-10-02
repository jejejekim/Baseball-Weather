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
import Calendar from "./Calendar";

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
    left: 0;
    top: 0;

    // background-color: rgba(0, 57, 159, 0.2);
`;

function App() {
    const [weatherRes, setWeatherRes] = useState({
        temp: 0,
        weather: "",
        location: "롯데자이언츠상동야구장",
    });
    const [raining, setRaining] = useState(false);

    const getWeather = async (lat, lon) => {
        try {
            const apiKey = "135fc4078d2369b399cd82144775cf19";
            const req = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
                // `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=${apiKey}&units=metric` //16일치 날씨 정보
            );
            const res = await req.json();

            // console.log(res);

            //넘겨 줄 정보 세팅
            setWeatherRes({
                temp: res.main.temp,
                weather: res.weather[0].main,
                location: res.name,
            });

            setRaining(weatherRes.weather == "Rain" ? true : false);
        } catch (err) {
            console.log(err);
        }
    };

    const success = ({ coords, timestamp }) => {
        // console.log(coords);

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
    };

    getUserLocation();

    return (
        <>
            <WeaBlock backgroud-color={raining ? "rgba(0, 57, 159, 0.2)" : ""}>
                <GlobalStyle />
                <WeaContent weatherRes={weatherRes} />
            </WeaBlock>
            <BackGround />
        </>
    );
}

export default App;
