import styled from "styled-components";
import WeekdaysButtons from "./WeekdaysButtons.js";
import TrashButton from "./TrashButton.js";

export default function UserHabitBox({ habitId, habit }) {
    return (
        <Main>
            <p>{ habit.name }</p>
            <WeekdaysButtons habit = {habit} isUnclickable = {true} />
            <TrashButton habitId = {habit.id} />
        </Main>
    );
}

const Main = styled.div`
    width: 100%;
    border-radius: 5px;
    margin-top: 20px;
    padding: 16px;
    background-color: #FFFFFF;
    color: #666666;
    font-size: 20px;
    position: relative;

    & p {
        max-width: 80%;
        word-wrap: break-word;
    }
`