import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HabitRequestContext from '../../contexts/HabitsScreen/HabitRequestContext.js';
import UserProfileDataContext from '../../contexts/App/UserProfileDataContext.js';
import UserHabitsDataContext from '../../contexts/App/UserHabitsDataContext.js';
import IsCreateHabitBoxHidden from '../../contexts/HabitsScreen/IsCreateHabitBoxHiddenContext.js';

import Container from '../../shared/styles/Container.js';
import ScreenTitle from '../../shared/components/ScreenTitle.js';
import ScreenDescription from '../../shared/components/ScreenDescription.js';
import CreateNewHabitBox from './components/CreateNewHabitBox.js';
import UserHabitBox from './components/UserHabitBox.js';
import NewHabitButton from './components/NewHabitButton.js';
import Loading from '../../shared/components/Loading.js';

import { getAndDisplayUserHabits } from './HabitsScreenFunctions.js';

export default function HabitsScreen({ setAreFixedBarsHidden }) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const { userHabitsData, setUserHabitsData } = useContext(UserHabitsDataContext);
    const { isHabitRequestBeingValidated } = useContext(HabitRequestContext);
    const [isCreateNewHabitBoxHidden, setIsCreateNewHabitBoxHidden] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setAreFixedBarsHidden(false);
        getAndDisplayUserHabits({ userProfileData, userHabitsData, setUserHabitsData, navigate });
    }, [isHabitRequestBeingValidated]);

    if (!userHabitsData.everyHabit) {
        return (
            <Container backgroundColor="#F2F2F2" horizontalPadding="18px" topPadding="92px" bottomPadding="120px">
                <Loading />
            </Container>
        );
    }
    return (
        <IsCreateHabitBoxHidden.Provider
            value={{ isCreateNewHabitBoxHidden, setIsCreateNewHabitBoxHidden }}
        >
            <Container backgroundColor="#F2F2F2" horizontalPadding="18px" topPadding="92px" bottomPadding="120px">
                <ScreenTitle text="Meus H??bitos" />
                <NewHabitButton />
                <CreateNewHabitBox isShown={!isCreateNewHabitBoxHidden} />
                {userHabitsData.everyHabit.map(
                    (habit) => <UserHabitBox key={habit.id} habit={habit} />,
                )}
                <ScreenDescription
                    text="Voc?? n??o tem nenhum h??bito cadastrado ainda. Adicione um h??bito para come??ar a trackear!"
                    isShown={!userHabitsData.everyHabit.length}
                />

            </Container>
        </IsCreateHabitBoxHidden.Provider>
    );
}
