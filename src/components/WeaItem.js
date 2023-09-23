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

    .hoverCloudy {
        width: 4.8rem;
        height: 8.8rem;
        border-radius: 50%;
        border: 2px solid #000;
        display: flex;
        align-items: center;
        font-weight: 500;
        color: #000;
        background: #d8d8d8;
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

function WeaItemSunny({ day, temp, num }) {
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
                className={isHovering || num == 1 ? "hoverSunny" : "default"}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <div className="dailyWea">
                    <p>{temp}˚</p>
                    <IcSun
                        width={"2.438rem"}
                        height={"2.438rem"}
                        fill={isHovering || num == 1 ? "#000" : "#FFB800"}
                    />
                    <p>{day}</p>
                </div>
            </div>
        </WeaItemBlock>
    );
}

function WeaItemRainy({ day, temp, num }) {
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
                className={isHovering || num == 1 ? "hoverRainy" : "default"}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <div className="dailyWea">
                    <p>{temp}˚</p>
                    <IcRain
                        width={"2.125rem"}
                        height={"2.438rem"}
                        fill={isHovering || num == 1 ? "#fff" : "#0F63FB"}
                    />
                    <p>{day}</p>
                </div>
            </div>
        </WeaItemBlock>
    );
}

function WeaItemCloudy({ day, temp, num }) {
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
                className={isHovering || num == 1 ? "hoverCloudy" : "default"}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <div className="dailyWea">
                    <p>{temp}˚</p>
                    <IcCloud
                        width={"3.250rem"}
                        height={"2.438rem"}
                        fill={isHovering || num == 1 ? "#000" : "#808080"}
                    />
                    <p>{day}</p>
                </div>
            </div>
        </WeaItemBlock>
    );
}

export { WeaItemSunny, WeaItemRainy, WeaItemCloudy };
