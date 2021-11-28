import styled from 'styled-components';
import { selectDay } from '../HabitsScreenFunctions';

export default function Weekdays({ habit, setHabit, isUnclickable }) {
    const weekdaysList = [
        { letter: 'D', key: 'Weekday 1' },
        { letter: 'S', key: 'Weekday 2' },
        { letter: 'T', key: 'Weekday 3' },
        { letter: 'Q', key: 'Weekday 4' },
        { letter: 'Q', key: 'Weekday 5' },
        { letter: 'S', key: 'Weekday 6' },
        { letter: 'S', key: 'Weekday 7' },
    ];

    return (
        <Wrapper>
            {weekdaysList.map(({ letter, key }, index) => (
                <Button
                    key={key}
                    onClick={() => selectDay(index, isUnclickable, habit, setHabit)}
                    isSelected={habit.days.includes(index)}
                >
                    {letter}
                </Button>
            ))}
        </Wrapper>

    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    margin-top: 8px;
`;

const Button = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 4px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    background-color: ${({ isSelected }) => (isSelected ? '#CFCFCF' : '#FFFFFF')};
    color: ${({ isSelected }) => (isSelected ? '#FFFFFF' : '#CFCFCF')} ;
`;
