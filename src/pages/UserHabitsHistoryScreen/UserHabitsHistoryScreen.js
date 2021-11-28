import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HabitRequestContext from '../../contexts/HabitsScreen/HabitRequestContext';

import Container from '../../shared/styles/Container';
import ScreenTitle from '../../shared/components/ScreenTitle';
import Loading from '../../shared/components/Loading';
import RecordedDataScreenContent from './components/UserHabitsHistoryScreenContent';
import UserProfileDataContext from '../../contexts/App/UserProfileDataContext';

import { getAndDisplayHabitsHistory } from './UserHabitsHistoryFunctions';

export default function RecordedDataScreen({ setAreFixedBarsHidden }) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const [userHabitsHistory, setUserHabitsHistory] = useState('');
    const { isHabitRequestBeingValidated } = useContext(HabitRequestContext);
    const navigate = useNavigate();

    useEffect(() => {
        setAreFixedBarsHidden(false);
        getAndDisplayHabitsHistory(userProfileData, setUserHabitsHistory, navigate);
    }, [isHabitRequestBeingValidated]);
    if (!userHabitsHistory) {
        return (
            <Container backgroundColor="#F2F2F2" horizontalPadding="18px" topPadding="92px" bottomPadding="120px">
                <Loading />
            </Container>
        );
    }

    return (
        <Container backgroundColor="#F2F2F2" horizontalPadding="18px" topPadding="92px" bottomPadding="120px">
            <ScreenTitle text="Histórico" />
            <RecordedDataScreenContent userHabitsHistory={userHabitsHistory} />
        </Container>
    );
}
