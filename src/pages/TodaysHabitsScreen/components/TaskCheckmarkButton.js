import styled from 'styled-components';
import { IoMdCheckmark } from 'react-icons/io';
import { useContext, useState } from 'react';
import UserProfileDataContext from '../../../contexts/App/UserProfileDataContext';
import HabitRequestContext from '../../../contexts/HabitsScreen/HabitRequestContext';
import greenLoadingGif from '../../../assets/img/GreenLoading.gif';
import lightGreenLoadingGif from '../../../assets/img/LightGreenLoading.gif';
import { selectOrDeselectHabit } from '../TodaysHabitsFunctions';

export default function TaskCheckmarkButton({ habitId, isHabitComplete }) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const {
        isHabitRequestBeingValidated,
        setIsHabitRequestBeingValidated,
    } = useContext(HabitRequestContext);
    const [isThisHabitBeingUpdated, setIsThisHabitBeingUpdated] = useState(false);
    const loadingGif = isHabitComplete ? lightGreenLoadingGif : greenLoadingGif;

    return (
        <Wrapper
            disabled={isHabitRequestBeingValidated}
            isHabitComplete={isHabitComplete}
            onClick={() => selectOrDeselectHabit(
                setIsHabitRequestBeingValidated,
                setIsThisHabitBeingUpdated,
                isHabitComplete,
                habitId,
                userProfileData,
            )}
        >
            {isThisHabitBeingUpdated ? <img alt="Loading" src={loadingGif} /> : <IoMdCheckmark />}
        </Wrapper>
    );
}

const Wrapper = styled.button`
    width: 69px;
    height: 69px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-color: ${({ isHabitComplete }) => (isHabitComplete ? '#8FC549' : '#EBEBEB')};
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
`;
