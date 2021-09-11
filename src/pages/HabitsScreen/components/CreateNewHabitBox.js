import styled from "styled-components";
import { useState } from "react";
import StandardInput from "../../../shared/components/StandardInput";
import OptionButtons from "./OptionButtons";
import WeekdaysButtons from "./WeekdaysButtons.js";
import { adjustStateObjectData } from "../../../shared/functions/Functions";
import { useContext } from "react/cjs/react.development";
import HabitRequestContext from "../../../contexts/HabitsScreen/HabitRequestContext";


export default function CreateNewHabitBox() { 
    const [newHabit, setNewHabit] = useState({name:"", days:[]});
    const { isHabitRequestBeingValidated } = useContext(HabitRequestContext);

    return (
        <Main>
            <StandardInput 
                placeholder = "nome do hábito"  
                value = {newHabit.name} 
                disabled = {isHabitRequestBeingValidated}                  
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
                isUnclickable = {isHabitRequestBeingValidated}
            />
            <OptionButtons 
                newHabit = {newHabit}
                setNewHabit = {setNewHabit}
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