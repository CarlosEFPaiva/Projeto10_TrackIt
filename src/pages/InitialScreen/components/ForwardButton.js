import styled from "styled-components";
import loadingGif from "../../../assets/img/Loading-bgBlue.gif"

export default function ForwardButton({ isUserRegistered, isDataBeingValidated ,onClick }) {
    return (
        <Button onClick = {onClick}>
            {isDataBeingValidated ? <img src = {loadingGif} /> : isUserRegistered ? "Entrar" : "Cadastrar"}
        </Button>
    );
}

const Button = styled.button`
    width: 100%;
    height: 45px;
    margin-bottom: 25px ;
    background-color: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        height: 45px;
        width: 45px;

    }
`