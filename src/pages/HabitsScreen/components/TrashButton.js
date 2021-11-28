import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react/cjs/react.development";
import UserProfileDataContext from "../../../contexts/App/UserProfileDataContext";
import HabitRequestContext from "../../../contexts/HabitsScreen/HabitRequestContext";
import { deleteHabit } from "../HabitsScreenFunctions";

export default function TrashButton({habitId}) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const { isHabitRequestBeingValidated, setIsHabitRequestBeingValidated} = useContext(HabitRequestContext);

    return (
        <Button
            disabled={isHabitRequestBeingValidated}
            onClick={
                () => deleteHabit(setIsHabitRequestBeingValidated, habitId, userProfileData)
            }
        >
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