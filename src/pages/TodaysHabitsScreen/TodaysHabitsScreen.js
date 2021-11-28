import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../shared/styles/Container';
import HabitDueToday from './components/HabitDueToday';
import ScreenTitle from '../../shared/components/ScreenTitle';
import ScreenSubtitle from './components/ScreenSubtitle';
import ScreenDescription from '../../shared/components/ScreenDescription';
import { structuredTodaysDate } from '../../utils/externalLibs/dayJs';
import UserProfileDataContext from '../../contexts/App/UserProfileDataContext';
import UserHabitsDataContext from '../../contexts/App/UserHabitsDataContext';
import Loading from '../../shared/components/Loading';
import { getAndDisplayHabitsDueToday } from './TodaysHabitsFunctions';
import HabitRequestContext from '../../contexts/HabitsScreen/HabitRequestContext';

export default function TodaysHabitsScreen({ setAreFixedBarsHidden }) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const { userHabitsData, setUserHabitsData } = useContext(UserHabitsDataContext);
    const { isHabitRequestBeingValidated } = useContext(HabitRequestContext);
    const navigate = useNavigate();

    useEffect(() => {
        setAreFixedBarsHidden(false);
        getAndDisplayHabitsDueToday(userProfileData, userHabitsData, setUserHabitsData, navigate);
    }, [isHabitRequestBeingValidated]);

    if (!userHabitsData.todaysHabits) {
        return (
            <Container backgroundColor="#F2F2F2" horizontalPadding="18px" topPadding="92px" bottomPadding="120px">
                <Loading />
            </Container>
        );
    }

    return (
        <Container backgroundColor="#F2F2F2" horizontalPadding="18px" topPadding="92px" bottomPadding="120px">
            <ScreenTitle text={structuredTodaysDate()} />
            <ScreenSubtitle completionPercentage={userHabitsData.todaysCompletionPercentage} />
            {userHabitsData.todaysHabits.map(
                (habit) => <HabitDueToday key={habit.id} habit={habit} />,
            )}
            <ScreenDescription
                text="Você não tem nenhum hábito cadastrado para hoje. Que tal mudarmos isso?"
                isShown={!userHabitsData.todaysHabits.length}
            />
        </Container>
    );
}
