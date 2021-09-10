import styled from "styled-components";
import StandardInput from "../../../shared/components/StandardInput";
import OptionButtons from "./OptionButtons";
import WeekdaysButtons from "./WeekdaysButtons.js";

export default function CreateNewHabitBox({isHidden, setIsHidden}) {

    return (
        isHidden ? "" :
        <Main>
            <StandardInput placeholder = "nome do hábito" />
            <WeekdaysButtons />
            <OptionButtons>
                <button>Cancelar</button>
                <button>Salvar</button>
            </OptionButtons>
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