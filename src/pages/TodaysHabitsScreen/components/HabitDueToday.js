import styled from 'styled-components';
import UsersStreakAndRecord from './UsersStreakAndRecord.js';
import TaskCheckmarkButton from './TaskCheckmarkButton.js';

export default function HabitDueToday(
    { habit: { name, id, done, highestSequence, currentSequence } },
) {
    return (
        <Wrapper>
            <p>{name}</p>
            <UsersStreakAndRecord
                isHabitComplete={done}
                highestSequence={highestSequence}
                currentSequence={currentSequence}
            />
            <TaskCheckmarkButton habitId={id} isHabitComplete={done} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
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
`;
