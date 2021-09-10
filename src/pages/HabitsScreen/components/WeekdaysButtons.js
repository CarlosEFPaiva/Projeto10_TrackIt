import styled from "styled-components";

export default function Weekdays({ habit, setHabit, isUnclickable }) {
    const weekdaysList = ["D","S","T","Q","Q","S","S"]

    function selectDay(clickedDay) {
        if(!isUnclickable) {
            const updatedhabit = {...habit}
            if(habit.days.includes(clickedDay)){
                updatedhabit.days = habit.days.filter( (day) => day !== clickedDay );
            } else {
                updatedhabit.days.push(clickedDay)
            }
            setHabit(updatedhabit)
        }
    }
    
    return (
        <Main>
            {weekdaysList.map( (letter,index) => 
                <Button key = {index} onClick = {() => selectDay(index)} isSelected = {habit.days.includes(index)} > {letter} </Button>
            )}
        </Main>

    );
}

const Main = styled.div`
    width: 100%;
    display: flex;
    margin-top: 8px;
`

const Button = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 4px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    background-color: ${ ({ isSelected }) => isSelected ? "#CFCFCF" : "#FFFFFF" };
    color: ${ ({ isSelected }) => isSelected ? "#FFFFFF" : "#CFCFCF" } ;
`