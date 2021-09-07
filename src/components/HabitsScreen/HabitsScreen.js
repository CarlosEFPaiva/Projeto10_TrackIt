import styled from "styled-components";
import { BsTrash } from "react-icons/bs"
import { Container, ScreenTitle, ScreenDescription, TrackItInput } from "../shared/SharedElements";

export default function HabitsScreen() {
    const weekdaysInitials = ["D" , "S" , "T" , "Q", "Q", "S", "S"]
    return (
        <Container backgroundColor = "#F2F2F2" horizontalPadding = "18px" verticalPadding = "98px" >

            <ScreenTitle>
                <span>Meus hábitos</span>
                <NewHabitButton>+</NewHabitButton>
            </ScreenTitle>

            <UserHabit>
                <TrackItInput placeholder = "nome do hábito" />
                <Weekdays>
                    {weekdaysInitials.map( (letter,index) => <button key = {index} > {letter} </button> )}
                </Weekdays>
                <OptionButtons>
                    <button>Cancelar</button>
                    <button>Salvar</button>
                </OptionButtons>
            </UserHabit>

            <UserHabit>
                <span>Ler 1 capítulo por dia</span>
                <Weekdays>
                    {weekdaysInitials.map( (letter,index) => <button key = {index} > {letter} </button> )}
                </Weekdays>
                <TrashButton>
                    <BsTrash />
                </TrashButton>
            </UserHabit>

            <ScreenDescription>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </ScreenDescription>

        </Container>
    );
}

const NewHabitButton = styled.button`
    width: 40px;
    height: 35px;
    border-radius: 5px;
    background-color: #52B6FF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: #FFFFFF;
`
const UserHabit = styled.div`
    width: 100%;
    border-radius: 5px;
    margin-top: 20px;
    padding: 16px;
    background-color: #FFFFFF;
    color: #666666;
    position: relative;

    span {
        font-size: 13px;
    }
 
    span:nth-child(1) {
        font-size: 20px;
    }
`

const Weekdays = styled.div`
    width: 100%;
    display: flex;
    margin-top: 8px;

    button {
        width: 30px;
        height: 30px;
        margin-right: 4px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        background-color: ${ ({ isSelected }) => isSelected ? "#CFCFCF" : "#FFFFFF" };
        color: ${ ({ isSelected }) => isSelected ? "#FFFFFF" : "#CFCFCF" } ;
    }
`

const OptionButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
    font-size: 16px;

    button:nth-child(1) {
        margin-right: 24px;
        color: #52B6FF;
    }

    button:nth-child(2) {
        width: 84px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;
        color: #FFFFFF;
    }
`

const TrashButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 15px;
    color: #666666;
`