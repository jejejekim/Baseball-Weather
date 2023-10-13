import React from "react";
import { useState } from "react";
import styled from "styled-components";
import SunnyIcon from "./WeaIcon";
// import { ReactComponent as Sun } from "../assets/SVG/sun.svg";
import { ReactComponent as IcSun } from "../assets/SVG/icSun.svg";
import { ReactComponent as IcRain } from "../assets/SVG/icRain.svg";
import { ReactComponent as IcCloud } from "../assets/SVG/icCloud.svg";

const WeaItemBlock = styled.div`
    .default {
        width: 4.8rem;
        height: 8.8rem;
        border-radius: 50%;
        border: 2px solid #000;
        display: flex;
        align-items: center;
        font-weight: 500;
        color: #000;
        background: #fff;
    }

    .hoverClear {
        width: 4.8rem;
        height: 8.8rem;
        border-radius: 50%;
        border: 2px solid #000;
        display: flex;
        align-items: center;
        font-weight: 500;
        color: #000;
        background: #ffea2b;
        svg {
            fill: #000000;
        }
    }

    .hoverRain {
        width: 4.8rem;
        height: 8.8rem;
        border-radius: 50%;
        border: 2px solid #000;
        display: flex;
        align-items: center;
        font-weight: 500;
        color: #fff;
        background: #2774ff;
        svg {
            fill: #ffffff;
        }
    }

    .hoverClouds {
        width: 4.8rem;
        height: 8.8rem;
        border-radius: 50%;
        border: 2px solid #000;
        display: flex;
        align-items: center;
        font-weight: 500;
        color: #000;
        background: #c9c9c9;
        svg {
            fill: #000000;
        }
    }

    .dailyWea {
        width: 4.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 1.2rem;
    }

    .none {
        width: 4.8rem;
        height: 2.5rem;
    }
`;

function WeaItem({ day, tempNum, weather, num }) {
    //호버
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        <>
            <WeaItemBlock>
                <div
                    className={isHovering || num == 0 ? `hover${weather}` : "default"}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <div className="dailyWea">
                        <p>{tempNum}˚</p>
                        <div className="dailyIcon">
                            {weather == "Clear" ? (
                                <IcSun
                                    className="icSun"
                                    width={"2.438rem"}
                                    height={"2.438rem"}
                                    fill={"#FFB800"}
                                />
                            ) : weather == "Rain" ? (
                                <IcRain
                                    className="icRain"
                                    width={"2.125rem"}
                                    height={"2.438rem"}
                                    fill="#0F63FB"
                                />
                            ) : weather == "Clouds" ? (
                                <IcCloud
                                    className="icCloud"
                                    width={"3.250rem"}
                                    height={"2.438rem"}
                                    fill="#808080"
                                />
                            ) : (
                                <div className="none"></div>
                            )}
                        </div>
                        <p>{day}</p>
                    </div>
                </div>
            </WeaItemBlock>
        </>
    );
}

export default WeaItem;
