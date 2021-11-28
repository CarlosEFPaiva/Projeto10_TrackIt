import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CheckAndSendLoginData } from "./LoginFunctions"
import Container from "../../shared/styles/Container.js";
import ForwardButton from "../../shared/components/BlueForwardButton.js";
import MainLogo from "../../shared/components/MainLogo.js";
import UnderButtonMessageLink from "../../shared/components/InitialScreensUnderlinedMessage.js";
import StandardInput from "../../shared/components/StandardInput.js";
import UserProfileDataContext from "../../contexts/App/UserProfileDataContext.js";
import { adjustStateObjectData } from "../../shared/functions/Functions";
import { IsUserLoggedAndSendToHomepage } from "../../utils/localStorage";

export default function LoginScreen({ setAreFixedBarsHidden }) {
    setAreFixedBarsHidden(true)
    const [userLoginData, setUserLoginData] = useState({ email:"", password:""})
    const [isDataBeingValidated, setIsDataBeingValidated] = useState(false);
    const inputsData = [
        {placeholder: "email", type:"text", value:userLoginData.email, atribute: "email" },
        {placeholder: "senha", type:"password", value:userLoginData.password, atribute: "password" },
    ];
    const navigate = useNavigate()
    const { setUserProfileData } = useContext(UserProfileDataContext);

    IsUserLoggedAndSendToHomepage(setUserProfileData, navigate)

    return (
        <Container horizontalPadding = {"36px"} >
            <MainLogo />
            <form onSubmit = {(event) => CheckAndSendLoginData({ event, userLoginData, navigate, setIsDataBeingValidated, setUserProfileData })}>
                { inputsData.map( ({placeholder, type, value, atribute}, index) => 
                    <StandardInput 
                        key = {index}
                        placeholder = {placeholder}
                        type = {type}
                        disabled = {isDataBeingValidated}
                        value = {value}
                        onChange = { (e) => adjustStateObjectData({
                            objectToChange:userLoginData,
                            setObjectToChange:setUserLoginData,
                            atributesToChange:[atribute],
                            atributesNewValues:[e.target.value]
                        })}
                        marginBottom = "6px"
                    />)
                }
                <ForwardButton 
                    type = "submit"
                    text = "Entrar"
                    marginBottom = "25px"
                    isDataBeingValidated = {isDataBeingValidated}
                />
            </form>
            <UnderButtonMessageLink linkTo = "/cadastro" text = "Não tem uma conta? Cadastre-se!"/>
        </Container>
    );
}