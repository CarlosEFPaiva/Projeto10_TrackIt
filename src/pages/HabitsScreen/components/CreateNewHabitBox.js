import styled from "styled-components";
import { useState } from "react";
import StandardInput from "../../../shared/styles/StandardInput";
import OptionButtons from "./OptionButtons";
import WeekdaysButtons from "./WeekdaysButtons.js";
import { adjustStateObjectData } from "../../../utils/stateObject";
import { useContext } from "react/cjs/react.development";
import HabitRequestContext from "../../../contexts/HabitsScreen/HabitRequestContext";


export default function CreateNewHabitBox({ isShown }) { 
    const [newHabit, setNewHabit] = useState({name:"", days:[]});
    const { isHabitRequestBeingValidated } = useContext(HabitRequestContext);

    return (
        <Wrapper isShown={isShown}>
            <StandardInput 
                placeholder = "nome do hábito"  
                value = {newHabit.name} 
                disabled = {isHabitRequestBeingValidated}                  
                onChange = { (e) => adjustStateObjectData({
                        objectToChange:newHabit,
                        setObjectToChange:setNewHabit,
                        atributesToChange:["name"],
                        atributesNewValues:[e.target.value]
                    }
                )}
            />
            <WeekdaysButtons 
                habit = { newHabit }
                setHabit = {setNewHabit}
                isUnclickable = {isHabitRequestBeingValidated}
            />
            <OptionButtons 
                newHabit = {newHabit}
                setNewHabit = {setNewHabit}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    border-radius: 5px;
    margin-top: 20px;
    padding: 16px;
    display: ${({ isShown }) => (isShown ? 'block' : 'none')};
    background-color: #FFFFFF;
    color: #666666;
    font-size: 20px;
    position: relative;
`