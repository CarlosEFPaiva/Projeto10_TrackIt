import styled from "styled-components";
import UsersStreakAndRecord from "./UsersStreakAndRecord.js";
import TaskCheckmarkButton from "./TaskCheckmarkButton.js";

export default function HabitDueToday({ isHabitComplete, title }) {
    return (
        <Main>
            <p>{title}</p>
            <UsersStreakAndRecord />
            <TaskCheckmarkButton isHabitComplete = {isHabitComplete} /> 
        </Main>
    );
}

const Main = styled.div`
    width: 100%;
    border-radius: 5px;
    margin-top: 20px;
    padding: 16px;
    background-color: #FFFFFF;
    font-size: 20px;
    color: #666666;
    position: relative;

    > p {
        display: block;
        width: calc(100% - 75px);
        word-wrap: break-word;
    }
`