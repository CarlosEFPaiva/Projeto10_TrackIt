import styled from "styled-components";

export default function UsersStreakAndRecord({ isHabitComplete, highestSequence, currentSequence }) {
    return (
        <Main>
            <p>Sequência atual: <UsersStreakAndRecordValue isHabitComplete = {isHabitComplete} > { currentSequence } dias </UsersStreakAndRecordValue> </p>
            <p>Seu recorde: <UsersStreakAndRecordValue> { highestSequence } dias </UsersStreakAndRecordValue> </p>
        </Main>
    );
}

const Main = styled.div`
    width: 100%;
    margin-top: 8px;
    font-size: 13px;
`

const UsersStreakAndRecordValue = styled.span`
    color: ${ ({ isHabitComplete, isRecordTied }) => isHabitComplete || isRecordTied ? "#8FC549" : "#666666" }
`