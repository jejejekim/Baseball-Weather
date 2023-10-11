import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "./App.scss";
import WeaContent from "./components/WeaContent";
import BackGround from "./components/BackGround";

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
    const apiKey =
        "ljsWVYgdEhgUE5uPjMFMpoKgNbrIGcgSuUMI7c4UmNr5E88U5%2Bu%2FWJAePHSow38OEGSaHweiYgWTmb7LsPW3RQ%3D%3D";
    const type = "JSON";

    const getWeather = async () => {
        try {
            const req = await fetch(
                `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&numOfRows=14&pageNo=1&dataType=${type}&base_date=20231011&base_time=0500&nx=55&ny=127`
                // `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=${apiKey}&numOfRows=1&pageNo=1&dataType=${type}&regId=11D10000&tmFc=202310110600`
            );

            const res = await req.json(); //JSON으로 변환
            const resp = res.response.body.items.item;

            // console.log(resp);

            // POP: 강수확률 [7]
            // SKY: 하늘상태 [5] //맑음(1), 구름많음(3), 흐림(4)
            // TMP: 1시간 기온 [0]
            // PTY: 강수형태 [6] 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)

            //넘겨 줄 정보 세팅
            setWeatherRes({
                temp: resp[0].fcstValue,
                sky: resp[5].fcstValue,
                pty: resp[6].fcstValue,
                location: "롯데자이언츠상동야구장",
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
