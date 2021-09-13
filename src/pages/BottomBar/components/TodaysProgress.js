import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import UserHabitsDataContext from "../../../contexts/App/UserHabitsDataContext";

export default function TodaysProgress() {
    const { userHabitsData } = useContext(UserHabitsDataContext);
    const percentage = userHabitsData ? userHabitsData.todaysCompletionPercentage : 0;
    return (
        <Link to = "/hoje">
            <Main>
                <CircularProgressbar
                    value={ percentage }
                    text={"Hoje"}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    textSize: "18px"
                    })}
                />
            </Main>
        </Link>
    );
}

const Main = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 50%;
    position: fixed;
    left: calc( ( 100% - 91px ) / 2);
    bottom: 10px;
`