import { Link } from "react-router-dom";
import { MainLogo, Button, UnderButtonMessage } from "./InitialScreenElements.js"
import { Container, TrackItInput } from "../shared/SharedElements.js";
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