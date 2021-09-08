import styled from "styled-components";

export default function UnderButtonMessage({ isUserRegistered }) {
    return (
        <Main>
            {isUserRegistered ? "Não tem uma conta? Cadastre-se!" : "Já tem uma conta? Faça login!" }
        </Main>
    );
}

const Main = styled.span`
    font-size: 14px;
    text-decoration: underline;
    color: #52B6FF;
`