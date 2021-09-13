import styled from "styled-components";
import ForwardButton from "../../../shared/components/BlueForwardButton";
import { CreateNewHabit } from "../../../services/axiosServices";
import { useContext } from "react";
import UserProfileDataContext from "../../../contexts/App/UserProfileDataContext";
import UserHabitsDataContext from "../../../contexts/App/UserHabitsDataContext";
import isCreateHabitBoxHiddenContext from "../../../contexts/HabitsScreen/IsCreateHabitBoxHiddenContext";
import HabitRequestContext from "../../../contexts/HabitsScreen/HabitRequestContext";
import Swal from 'sweetalert2';

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
                    Swal.fire({
                            title: 'Hábito criado!',
                            text: 'Agora você só precisa segui-lo, ok?',
                            icon: 'success',
                          });
                    setIsCreateNewHabitBoxHidden(true);
                    setNewHabit({name:"", days:[]});
                    setIsHabitRequestBeingValidated(false);
                })
                .catch( error => {
                    Swal.fire({
                        title: 'Parece que houve algum erro!',
                        text: 'Nos desculpe! :/ Tente novamente mais tarde',
                        icon: 'error',
                      });
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
        Swal.fire({
            title: 'Esse nome não está legal!',
            text: 'Preencha o campo do nome do hábito com até 40 caracteres',
            icon: 'error',
          });
        return false;
    } else if (!newHabit.days.length) {
        Swal.fire({
            title: "Selecione pelo menos um dia da semana!",
            text: 'Que hábito é esse que não se pratica dia nenhum?',
            icon: 'error',
          });
        return false;
    } else if(userHabitsData.everyHabit.find( ({name}) => name.toLowerCase() === newHabit.name.toLowerCase() )) {
        Swal.fire({
            title: "Oops!",
            text: 'Parece que você já tem um hábito com esse nome!',
            icon: 'error',
          });
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