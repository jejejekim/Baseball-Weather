import React from "react";
import { useState } from "react";
import styled from "styled-components";
import SunnyIcon from "./WeaIcon";
// import { ReactComponent as Sun } from "../assets/SVG/sun.svg";
import { ReactComponent as IcSun } from "../assets/SVG/icSun.svg";
import { ReactComponent as IcRain } from "../assets/SVG/icRain.svg";

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

    .hoverSunny {
        width: 4.8rem;
        height: 8.8rem;
        border-radius: 50%;
        border: 2px solid #000;
        display: flex;
        align-items: center;
        font-weight: 500;
        color: #000;
        background: #ffea2b;
    }

    .hoverRainy {
        width: 4.8rem;
        height: 8.8rem;
        border-radius: 50%;
        border: 2px solid #000;
        display: flex;
        align-items: center;
        font-weight: 500;
        color: #fff;
        background: #2774ff;
    }

    .dailyWea {
        width: 4.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 1.2rem;
    }

    //왜 되는 거지??????
    .icon {
        width: 2rem;
        height: 2rem;
    }
`;

function WeaItemSunny({ day, temp }) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <WeaItemBlock>
            <div
                className={isHovering ? "hoverSunny" : "default"}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <div className="dailyWea">
                    <p>{temp}˚</p>
                    <IcSun
                        width={"2.438rem"}
                        height={"2.438rem"}
                        fill={isHovering ? "#000" : "#FFB800"}
                    />
                    <p>{day}</p>
                </div>
            </div>
        </WeaItemBlock>
    );
}

function WeaItemRainy({ day, temp }) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        <WeaItemBlock>
            <div
                className={isHovering ? "hoverRainy" : "default"}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <div className="dailyWea">
                    <p>{temp}˚</p>
                    <IcRain
                        width={"2.125rem"}
                        height={"2.125rem"}
                        fill={isHovering ? "#fff" : "#0F63FB"}
                    />
                    <p>{day}</p>
                </div>
            </div>
        </WeaItemBlock>
    );
}

export { WeaItemSunny, WeaItemRainy };
