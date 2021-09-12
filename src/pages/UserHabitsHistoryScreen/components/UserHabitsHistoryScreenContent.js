import styled from "styled-components";
import { useState } from "react";
import PrintedHabits from "./PrintedHabits";
import Calendar from "./Calendar";

export default function RecordedDataScreenContent({ userHabitsHistory }) { 
    const [clickedDate, setClickedDate] = useState(false);

    return (
        <Main>
            { clickedDate ? 
            <PrintedHabits
                givenDate = { clickedDate }
                givenDateHabitsList = { userHabitsHistory.find( ({day}) => day === clickedDate ).habits }
                setClickedDate = { setClickedDate }
            />            
            :
            <Calendar
                userHabitsHistory = { userHabitsHistory }
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