import styled from "styled-components";
import { IoMdCheckmark } from "react-icons/io";
import { Container, ScreenTitle } from "../shared/SharedElements";

export default function TodaysHabitsScreen() {
    const completionPercentage = 0;
    return (
        <Container backgroundColor = "#F2F2F2" horizontalPadding = "18px" topPadding = "92px" bottomPadding = "120px" >
            <ScreenTitle>
                <span>Segunda, 17/05</span>
            </ScreenTitle>
            <ScreenSubtitle completionPercentage = {completionPercentage}>
                <span>{completionPercentage ? `${completionPercentage}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"} </span>
            </ScreenSubtitle>

            <HabitDueToday>
                <p>Ler 1 capítulo de livro</p>
                <UsersStreakAndRecord>
                    <p>Sequência atual: <UsersStreakAndRecordValue> 3 dias </UsersStreakAndRecordValue> </p>
                    <p>Seu recorde: <UsersStreakAndRecordValue> 5 dias </UsersStreakAndRecordValue> </p>
                </UsersStreakAndRecord>
                <TaskCheckmarkButton isHabitComplete = {true} > <IoMdCheckmark /> </TaskCheckmarkButton>
            </HabitDueToday>

        </Container>
    );
}

const ScreenSubtitle = styled.div`
    width: 100%;
    margin-top: 6px;
    font-size: 18px;
    color: ${ ({completionPercentage}) => completionPercentage ? "#8FC549" : "#BABABA" };
`

const HabitDueToday = styled.div`
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

const UsersStreakAndRecord = styled.div`
    width: 100%;
    margin-top: 8px;
    font-size: 13px;
`

const UsersStreakAndRecordValue = styled.span`
    color: ${ ({ isHabitComplete, isRecordTied }) => isHabitComplete || isRecordTied ? "#8FC549" : "#666666" }
`

const TaskCheckmarkButton = styled.button`
    width: 69px;
    height: 69px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-color: ${ ({ isHabitComplete }) => isHabitComplete ? "#8FC549" : "#EBEBEB" };
    color: #FFFFFF;
    font-size: 56px ;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 13px;
    top: calc((100% - 69px) / 2);


`

