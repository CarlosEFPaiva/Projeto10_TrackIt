import styled from "styled-components";
import { CreateNewHabit } from "../../../services/axiosServices";
import StandardInput from "../../../shared/components/StandardInput";
import OptionButtons from "./OptionButtons";
import WeekdaysButtons from "./WeekdaysButtons.js";
import { adjustStateObjectData } from "../../../shared/functions/Functions";
import { useContext } from "react";
import UserProfileDataContext from "../../../contexts/UserProfileDataContext";
import UserHabitsDataContext from "../../../contexts/UserHabitsDataContext";

export default function CreateNewHabitBox({newHabit, setNewHabit, isHidden, setIsHidden, isDataBeingValidated, setIsDataBeingValidated}) { 
    const { userProfileData } = useContext(UserProfileDataContext);
    const { userHabitsData } = useContext(UserHabitsDataContext);

    function checkValuesAndSendNewHabitToServer() {
        if (!newHabit.name.length || newHabit.name.length > 40) {
            alert("Por favor, preencha o campo do nome do hábito com até 40 caracteres")
        } else if (!newHabit.days.length) {
            alert("Que hábito é esse que não se pratica dia nenhum? Selecione pelo menos um dia da semana!")
        } else if(userHabitsData.everyHabit.find( ({name}) => name.toLowerCase() === newHabit.name.toLowerCase() )) {
            alert("Parece que você já tem um hábito com esse nome.. Não acha melhor editar ele?")
        } else {
            setIsDataBeingValidated(true);
            CreateNewHabit(newHabit, userProfileData.token)
            .then( resp => {
                alert("Hábito criado! Agora precisa seguir, ok? :)");
                setIsHidden(true);
                setNewHabit({name:"", days:[]});
                setIsDataBeingValidated(false);
            })
            .catch( error => {
                alert("Parece que houve algum erro! :/ Tente novamente mais tarde");
                setIsDataBeingValidated(false);
            })
        }
    }

    return (
        isHidden ? "" :
        <Main>
            <StandardInput 
                placeholder = "nome do hábito"  
                value = {newHabit.name} 
                disabled = {isDataBeingValidated}                  
                onChange = { (e) => adjustStateObjectData({
                        objectToChange:newHabit,
                        setObjectToChange:setNewHabit,
                        atributeToChange:"name",
                        atributeNewValue:e.target.value
                    }
                )}
            />
            <WeekdaysButtons 
                habit = { newHabit }
                setHabit = {setNewHabit}
                isUnclickable = {isDataBeingValidated}
            />
            <OptionButtons 
                cancelFunction = { () => setIsHidden(true) }
                saveFunction = { checkValuesAndSendNewHabitToServer }
                isDataBeingValidated = {isDataBeingValidated}
            />
        </Main>
    );
}

const Main = styled.div`
    width: 100%;
    border-radius: 5px;
    margin-top: 20px;
    padding: 16px;
    background-color: #FFFFFF;
    color: #666666;
    font-size: 20px;
    position: relative;
`