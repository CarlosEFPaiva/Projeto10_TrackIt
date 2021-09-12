import styled from "styled-components";
import { useState } from "react";
import TestingData from "./TestingData";
import PrintedHabits from "./PrintedHabits";
import Calendar from "./Calendar";

export default function RecordedDataScreenContent({ userHabitsHistory }) { 
    const [calendarStandardValue, setCalendarStandardValue] = useState(new Date());
    const [clickedDate, setClickedDate] = useState(false);

    return (
        <Main>
            { clickedDate ? 
            <PrintedHabits
                givenDate = { clickedDate }
                givenDateHabitsList = { TestingData.find( ({day}) => day === clickedDate ).habits }
                setClickedDate = { setClickedDate }
            />            
            :
            <Calendar
                userHabitsHistory = { TestingData }
                setClickedDate = { setClickedDate }
            />}
        </Main>
    );
}

const Main = styled.div`
    width: 80vw;
    margin-top: 20px;
    border-radius: 5px;
`