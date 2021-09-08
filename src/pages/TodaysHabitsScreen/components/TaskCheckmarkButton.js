import styled from "styled-components";
import { IoMdCheckmark } from "react-icons/io";

export default function TaskCheckmarkButton({ isHabitComplete }) {
    return (
        <Main isHabitComplete = {isHabitComplete} >
            <IoMdCheckmark />
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
`