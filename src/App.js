import React, { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
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
        sky: "",
        // sky1: 0,
        // sky2: "",
        pty: 0,
        pop: 0,
        location: "롯데자이언츠상동야구장",
    });
    const [raining, setRaining] = useState(false);

    const apiKey =
        "ljsWVYgdEhgUE5uPjMFMpoKgNbrIGcgSuUMI7c4UmNr5E88U5%2Bu%2FWJAePHSow38OEGSaHweiYgWTmb7LsPW3RQ%3D%3D";
    const type = "JSON";

    useEffect(() => {
        axios
            .all([
                axios.get(
                    `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&numOfRows=800&pageNo=1&dataType=${type}&base_date=20231012&base_time=0500&nx=55&ny=127`
                ),
                axios.get(
                    `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${apiKey}&numOfRows=1&pageNo=1&dataType=${type}&regId=11D10000&tmFc=202310121800`
                ),
            ])
            .then(
                axios.spread((req1, req2) => {
                    const res1 = req1.data.response.body.items.item;
                    const res2 = req2.data.response.body.items.item;

                    //rea[0]은 단기예보, res[1]은 중기예보
                    const res = [[...res1], ...res2];

                    // TMP: 1시간 기온 [0]
                    // SKY: 하늘상태 [5] //맑음(1), 구름많음(3), 흐림(4) //"맑음", "구름많음", "흐리고 비"
                    // PTY: 강수형태 [6] //없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)
                    // POP: 강수확률 [7]

                    setWeatherRes({
                        temp: [res[0][145].fcstValue, res[0][435].fcstValue, res[0][725].fcstValue],
                        sky: [
                            res[0][150].fcstValue,
                            res[0][440].fcstValue,
                            res[0][730].fcstValue,
                            res[1].wf3Pm,
                            res[1].wf4Pm,
                            res[1].wf5Pm,
                            res[1].wf6Pm,
                        ],
                        // sky1: [res[0][150].fcstValue, res[0][440].fcstValue, res[0][730].fcstValue],
                        // sky2: [res[1].wf3Pm, res[1].wf4Pm, res[1].wf5Pm, res[1].wf6Pm],
                        pty: [res[0][151].fcstValue, res[0][441].fcstValue, res[0][731].fcstValue],
                        pop: [
                            res[0][152].fcstValue,
                            res[0][442].fcstValue,
                            res[0][732].fcstValue,
                            res[1].rnSt3Pm,
                            res[1].rnSt4Pm,
                            res[1].rnSt5Pm,
                            res[1].rnSt6Pm,
                        ],
                    });
                    // console.log(res);
                    console.log(weatherRes);
                })
            )
            .catch((err) => console.log(err));
    }, []);

    // const success = () => {
    //     // console.log(coords);
    //     // getWeather();
    //     // getWeeklyWeather();
    // };

    // const getUserLocation = () => {
    //     if (!navigator.geolocation) {
    //         alert("위치 정보가 지원되지 않습니다");
    //     } else {
    //         //위치 정보를 받아오는 데에 성공했을 때 succes인자가 무조건 있어야 함
    //         navigator.geolocation.getCurrentPosition(success);
    //     }
    // };

    // getUserLocation();

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
