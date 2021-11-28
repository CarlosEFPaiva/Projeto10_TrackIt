import styled from "styled-components";
import { useState } from "react";
import PrintedHabits from "./PrintedHabits";
import Calendar from "./Calendar";

export default function RecordedDataScreenContent({ userHabitsHistory }) { 
    const [clickedDate, setClickedDate] = useState(false);

    return (
        <Wrapper>
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
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 80vw;
    margin-top: 20px;
    border-radius: 5px;
`