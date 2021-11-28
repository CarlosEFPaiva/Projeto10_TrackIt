import styled from "styled-components";
import ForwardButton from "../../../shared/components/BlueForwardButton";
import { useContext } from "react";
import UserProfileDataContext from "../../../contexts/App/UserProfileDataContext";
import UserHabitsDataContext from "../../../contexts/App/UserHabitsDataContext";
import isCreateHabitBoxHiddenContext from "../../../contexts/HabitsScreen/IsCreateHabitBoxHiddenContext";
import HabitRequestContext from "../../../contexts/HabitsScreen/HabitRequestContext";
import { checkValuesAndSendNewHabitToServer } from "../HabitsScreenFunctions";

export default function OptionButtons({ newHabit, setNewHabit }) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const { userHabitsData } = useContext(UserHabitsDataContext);
    const { isHabitRequestBeingValidated, setIsHabitRequestBeingValidated } = useContext(HabitRequestContext);
    const { setIsCreateNewHabitBoxHidden } = useContext(isCreateHabitBoxHiddenContext)

    function forwardButtonOnClick() {
        checkValuesAndSendNewHabitToServer(
            newHabit,
            userHabitsData,
            setIsHabitRequestBeingValidated,
            userProfileData,
            setIsCreateNewHabitBoxHidden,
            setNewHabit
        );
    }

    return (
        <Wrapper>
            <button onClick={() => setIsCreateNewHabitBoxHidden(true)}>
                Cancelar
            </button>
            <ForwardButton 
                    onClick = {forwardButtonOnClick}
                    text = "Salvar"
                    isDataBeingValidated = {isHabitRequestBeingValidated}
                    smallerVersion = {true}
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

    button:nth-child(1) {
        margin-right: 24px;
        color: #52B6FF;
    }
`