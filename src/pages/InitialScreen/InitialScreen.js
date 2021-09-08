import { Link } from "react-router-dom";
import Container from "../../shared/styles/Container.js";
import ForwardButton from "./components/ForwardButton.js";
import MainLogo from "./components/MainLogo.js";
import UnderButtonMessage from "./components/UnderButtonMessage.js";
import StandardInput from "../../shared/components/StandardInput.js";

export default function InitialScreen({isUserRegistered}) {
    const inputsData = [
        {placeholder: "email" , isHidden: false },
        {placeholder: "senha" , isHidden: false },
        {placeholder: "nome" , isHidden: isUserRegistered },
        {placeholder: "foto" , isHidden: isUserRegistered },
    ]
    return (
        <Container horizontalPadding = {"36px"} >
            <MainLogo />
            { inputsData.map( ({placeholder, isHidden}, index) => 
                <StandardInput key = {index} placeholder = {placeholder} isHidden = {isHidden} marginBottom = "6px" /> )
            }
            <ForwardButton isUserRegistered = { isUserRegistered } />
            <Link to={isUserRegistered ? "/cadastro" : "/"}>
                <UnderButtonMessage />
            </Link>
        </Container>
    );
}