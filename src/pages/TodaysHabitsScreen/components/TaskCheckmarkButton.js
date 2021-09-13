import styled from "styled-components";
import { IoMdCheckmark } from "react-icons/io";
import { useContext, useState } from "react";
import UserProfileDataContext from "../../../contexts/App/UserProfileDataContext";
import HabitRequestContext from "../../../contexts/HabitsScreen/HabitRequestContext";
import { SendHabitSelectionState } from "../../../services/axiosServices";
import greenLoadingGif from "../../../assets/img/GreenLoading.gif";
import lightGreenLoadingGif from "../../../assets/img/LightGreenLoading.gif";
import Swal from 'sweetalert2';

export default function TaskCheckmarkButton({ habitId, isHabitComplete }) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const { isHabitRequestBeingValidated, setIsHabitRequestBeingValidated } = useContext(HabitRequestContext);
    const [ isThisHabitBeingUpdated, setIsThisHabitBeingUpdated ] = useState(false)
    const loadingGif = isHabitComplete ? lightGreenLoadingGif : greenLoadingGif;

    function processHabitClick(selectionState) {
        SendHabitSelectionState(habitId, selectionState ,userProfileData.token)
        .then( () => {
            setIsHabitRequestBeingValidated(false);
            setIsThisHabitBeingUpdated(false);
        })
        .catch( () => {
            Swal.fire({
                title: `Parece que houve algum erro!`,
                text: `Por favor, tente novamente mais tarde`,
                icon: 'error',
              });
            setIsHabitRequestBeingValidated(false);
            setIsThisHabitBeingUpdated(false);
        })
    }

    function selectOrDeselectHabit() {
        if (!isHabitRequestBeingValidated) {
            setIsHabitRequestBeingValidated(true);
            setIsThisHabitBeingUpdated(true);
            if (isHabitComplete) {
                processHabitClick("uncheck");
            } else {
                processHabitClick("check");
            }
        }
    }

    return (
        <Main isHabitComplete = {isHabitComplete} onClick = { selectOrDeselectHabit } >
            {isThisHabitBeingUpdated ? <img src = { loadingGif } /> : <IoMdCheckmark />}
        </Main>
    );
}

const Main = styled.button`
    width: 69px;
    height: 69px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-color: ${ ({ isHabitComplete }) => isHabitComplete ? "#8FC549" : "#EBEBEB" };
    color: #FFFFFF;
    font-size: 56px ;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 13px;
    top: calc((100% - 69px) / 2);

    & img {
        width: 65px;
        height: 65px;
    }
`