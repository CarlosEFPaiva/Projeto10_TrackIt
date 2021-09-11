import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react/cjs/react.development";
import UserProfileDataContext from "../../../contexts/App/UserProfileDataContext";
import { SendDeleteRequest } from "../../../services/axiosServices";
import HabitRequestContext from "../../../contexts/HabitsScreen/HabitRequestContext";

export default function TrashButton({habitId}) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const { isHabitRequestBeingValidated, setIsHabitRequestBeingValidated} = useContext(HabitRequestContext);


    function deleteHabit() {
        if(!isHabitRequestBeingValidated && window.confirm("Tem certeza que deseja deletar esse hábito?")) {
            setIsHabitRequestBeingValidated(true)
            SendDeleteRequest(habitId, userProfileData.token)
            .then(resp => {
                alert("Hábito deletado com sucesso!")
                setIsHabitRequestBeingValidated(false)
            })
            .catch(error => {
                alert("Parece que houve um erro! :/ Tente novamente mais tarde")
                setIsHabitRequestBeingValidated(false)
            })
        }
    }

    return (
        <Button onClick = { deleteHabit }>
            <BsTrash />
        </Button>
    );

}

const Button = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 15px;
    color: #666666;
`