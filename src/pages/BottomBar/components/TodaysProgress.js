import styled from 'styled-components';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import UserHabitsDataContext from '../../../contexts/App/UserHabitsDataContext';

export default function TodaysProgress() {
    const { userHabitsData } = useContext(UserHabitsDataContext);
    const percentage = userHabitsData ? userHabitsData.todaysCompletionPercentage : 0;
    const navigate = useNavigate();
    return (
        <Wrapper onClick={() => navigate('/hoje')}>
            <CircularProgressbar
                value={percentage}
                text="Hoje"
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: '#52B6FF',
                    textColor: '#fff',
                    pathColor: '#fff',
                    trailColor: 'transparent',
                    textSize: '18px',
                })}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 50%;
    position: fixed;
    left: calc( ( 100% - 91px ) / 2);
    bottom: 10px;
`;
