import styled from "styled-components";
import ForwardButton from "../../../shared/components/BlueForwardButton";
import { CreateNewHabit } from "../../../services/axiosServices";
import { useContext } from "react";
import UserProfileDataContext from "../../../contexts/App/UserProfileDataContext";
import UserHabitsDataContext from "../../../contexts/App/UserHabitsDataContext";
import isCreateHabitBoxHiddenContext from "../../../contexts/HabitsScreen/IsCreateHabitBoxHiddenContext";
import HabitRequestContext from "../../../contexts/HabitsScreen/HabitRequestContext";

export default function OptionButtons({ newHabit, setNewHabit }) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const { userHabitsData } = useContext(UserHabitsDataContext);
    const { isHabitRequestBeingValidated, setIsHabitRequestBeingValidated } = useContext(HabitRequestContext);
    const { setIsCreateNewHabitBoxHidden } = useContext(isCreateHabitBoxHiddenContext)


    function checkValuesAndSendNewHabitToServer() {
        if ( validateInputValues(newHabit, userHabitsData) ) {
            setIsHabitRequestBeingValidated(true);
            CreateNewHabit(newHabit, userProfileData.token)
                .then( resp => {
                    alert("Hábito criado! Agora precisa seguir, ok? :)");
                    setIsCreateNewHabitBoxHidden(true);
                    setNewHabit({name:"", days:[]});
                    setIsHabitRequestBeingValidated(false);
                })
                .catch( error => {
                    alert("Parece que houve algum erro! :/ Tente novamente mais tarde");
                    setIsHabitRequestBeingValidated(false);
                });
        }
    }

    return (
        <Main>
        <button onClick = { () => setIsCreateNewHabitBoxHidden(true) }>Cancelar</button>
        <ForwardButton 
                onClick = {checkValuesAndSendNewHabitToServer}
                text = "Salvar"
                isDataBeingValidated = {isHabitRequestBeingValidated}
                smallerVersion = {true}
            />
    </Main>
    );
}

function validateInputValues(newHabit, userHabitsData) {
    if (!newHabit.name.length || newHabit.name.length > 40) {
        alert("Por favor, preencha o campo do nome do hábito com até 40 caracteres");
        return false;
    } else if (!newHabit.days.length) {
        alert("Que hábito é esse que não se pratica dia nenhum? Selecione pelo menos um dia da semana!");
        return false;
    } else if(userHabitsData.everyHabit.find( ({name}) => name.toLowerCase() === newHabit.name.toLowerCase() )) {
        alert("Parece que você já tem um hábito com esse nome!");
        return false;
    }
    return true;
}


const Main = styled.div`
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