import styled from "styled-components";
import ForwardButton from "../../../shared/components/BlueForwardButton";

export default function OptionButtons({cancelFunction, saveFunction, isDataBeingValidated}) {
    return (
        <Main>
        <button onClick = {cancelFunction}>Cancelar</button>
        <ForwardButton 
                onClick = {saveFunction}
                text = "Salvar"
                isDataBeingValidated = {isDataBeingValidated}
                smallerVersion = {true}
            />
    </Main>
    );
}

const Main = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
    font-size: 16px;

    button:nth-child(1) {
        margin-right: 24px;
        color: #52B6FF;
    }
`