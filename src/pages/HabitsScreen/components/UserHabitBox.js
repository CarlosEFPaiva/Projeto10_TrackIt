import styled from "styled-components";
import WeekdaysButtons from "./WeekdaysButtons.js";
import TrashButton from "./TrashButton.js";

export default function UserHabitBox({ habitTitle }) {
    return (
        <Main>
            <p>{ habitTitle }</p>
            <WeekdaysButtons />
            <TrashButton />
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
`