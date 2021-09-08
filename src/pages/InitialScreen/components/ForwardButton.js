import styled from "styled-components";

export default function ForwardButton({ isUserRegistered }) {
    return (
        <Button>
            {isUserRegistered ? "Entrar" : "Cadastrar"}
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
`