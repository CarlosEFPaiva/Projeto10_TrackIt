import styled from "styled-components";
import { AiOutlineRollback } from "react-icons/ai";
import HabitLine from "./HabitLine";

export default function PrintedHabits({ givenDate, givenDateHabitsList, setClickedDate }) {
    console.log(givenDateHabitsList);
    return (
        <Main>
            <Title> Hábitos do dia {givenDate} </Title>
            <Button onClick = { () => setClickedDate(false) } > <AiOutlineRollback /> </Button>
            {givenDateHabitsList.map( ({ name, done },index) => 
            <HabitLine
                key = {index}
                habit = {name}
                isDone = {done} 
            />)}
        </Main>
    );
}

const Main = styled.div`
    width: 100%;
    height: 300px;
    padding: 20px 5px;
    background-color: #FFF;
    border-radius: 10px;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Title = styled.p`
    font-size: 18px;
    display: inline-block;
    margin-bottom: 20px;
`

const Button = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #52B6FF;
    color: #FFF;
    font-size: 24px;
    position: absolute;
    left: 15px;
    top: 15px;
`



/*function showDatesHabits(date, userHabitsHistory) {
    const givenDate = dayjs(date).format("DD/MM/YYYY");
    const UserGivenDateHabitHistory = userHabitsHistory.find( ({day}) => day === givenDate );
    if (UserGivenDateHabitHistory && givenDate !== TodaysDate ) {

    }

}*/