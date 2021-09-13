import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react/cjs/react.development";
import UserProfileDataContext from "../../../contexts/App/UserProfileDataContext";
import { SendDeleteRequest } from "../../../services/axiosServices";
import HabitRequestContext from "../../../contexts/HabitsScreen/HabitRequestContext";
import Swal from 'sweetalert2';

export default function TrashButton({habitId}) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const { isHabitRequestBeingValidated, setIsHabitRequestBeingValidated} = useContext(HabitRequestContext);


    function deleteHabit() {
        if(!isHabitRequestBeingValidated){
            Swal.fire({
                title: 'Você tem certeza?',
                text: 'Deseja mesmo deletar esse hábito?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Pode deletar!',
                cancelButtonText: 'Não, eu mudei de ideia!'
              })
              .then( result => {
                    if (result.isConfirmed) {
                        setIsHabitRequestBeingValidated(true)
                        SendDeleteRequest(habitId, userProfileData.token)
                        .then(resp => {
                            Swal.fire({
                                title: 'Beleza!',
                                text: 'Hábito deletado com sucesso!',
                                icon: 'success',
                            });
                            setIsHabitRequestBeingValidated(false)
                        })
                        .catch(error => {
                            Swal.fire({
                                title: 'Parece que houve algum erro!',
                                text: 'Nos desculpe! :/ Tente novamente mais tarde',
                                icon: 'error',
                            });
                            setIsHabitRequestBeingValidated(false)
                        })
                    } 
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