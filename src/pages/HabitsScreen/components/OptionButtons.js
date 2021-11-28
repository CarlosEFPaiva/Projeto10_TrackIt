import styled from 'styled-components';
import { useContext } from 'react';
import ForwardButton from '../../../shared/components/BlueForwardButton';
import UserProfileDataContext from '../../../contexts/App/UserProfileDataContext';
import UserHabitsDataContext from '../../../contexts/App/UserHabitsDataContext';
import isCreateHabitBoxHiddenContext from '../../../contexts/HabitsScreen/IsCreateHabitBoxHiddenContext';
import HabitRequestContext from '../../../contexts/HabitsScreen/HabitRequestContext';
import { checkValuesAndSendNewHabitToServer } from '../HabitsScreenFunctions';

export default function OptionButtons({ newHabit, setNewHabit }) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const { userHabitsData } = useContext(UserHabitsDataContext);
    const {
        isHabitRequestBeingValidated,
        setIsHabitRequestBeingValidated,
    } = useContext(HabitRequestContext);
    const { setIsCreateNewHabitBoxHidden } = useContext(isCreateHabitBoxHiddenContext);

    function forwardButtonOnClick() {
        checkValuesAndSendNewHabitToServer(
            newHabit,
            userHabitsData,
            setIsHabitRequestBeingValidated,
            userProfileData,
            setIsCreateNewHabitBoxHidden,
            setNewHabit,
        );
    }

    return (
        <Wrapper>
            <CancelButton
                onClick={() => setIsCreateNewHabitBoxHidden(true)}
            >
                Cancelar
            </CancelButton>
            <ForwardButton
                onClick={forwardButtonOnClick}
                text="Salvar"
                isDataBeingValidated={isHabitRequestBeingValidated}
                smallerVersion
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
    font-size: 16px;
`;

const CancelButton = styled.button`
    margin-right: 24px;
    color: #52B6FF;
`;
