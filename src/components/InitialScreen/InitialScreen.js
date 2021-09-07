import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "../shared/Container";
import TrackItInput from "../shared/TrackItInput";
import trackItLogo from "../../Media/Logo.png"

export default function InitialScreen({isUserRegistered}) {
    const inputsData = [
        {placeholder: "email" , isHidden: false },
        {placeholder: "senha" , isHidden: false },
        {placeholder: "nome" , isHidden: isUserRegistered },
        {placeholder: "foto" , isHidden: isUserRegistered },
    ]
    return (
        <Container horizontalPadding = {"36px"} >
            <MainLogo src={trackItLogo} />
            { inputsData.map( ({placeholder, isHidden}, index) => 
                <TrackItInput key = {index} placeholder = {placeholder} isHidden = {isHidden} marginBottom = "6px" /> )
            }
            <Button>
                {isUserRegistered ? "Entrar" : "Cadastrar"}
            </Button>
            <Link to={isUserRegistered ? "/cadastro" : "/"}>
                <UnderButtonMessage>
                    {isUserRegistered ? "Não tem uma conta? Cadastre-se!" : "Já tem uma conta? Faça login!" }
                </UnderButtonMessage>
            </Link>
        </Container>
    );
}

const MainLogo = styled.img`
    width: 180px;
    height: 180px;
    margin-top: 68px;
    margin-bottom: 32px;
`

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

const UnderButtonMessage = styled.div`
    font-size: 14px;
    text-decoration: underline;
    color: #52B6FF;
`