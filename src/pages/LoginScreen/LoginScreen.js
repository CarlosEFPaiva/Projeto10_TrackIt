import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import CheckAndSendLoginData from "./LoginFunctions"
import Container from "../../shared/styles/Container.js";
import ForwardButton from "../../shared/components/InitialScreensForwardButton.js";
import MainLogo from "../../shared/components/MainLogo.js";
import UnderButtonMessageLink from "../../shared/components/InitialScreensUnderlinedMessage.js";
import StandardInput from "../../shared/components/StandardInput.js";
import UserProfileDataContext from "../../contexts/UserProfileDataContext.js";

export default function LoginScreen({ setAreFixedBarsHidden }) {
    setAreFixedBarsHidden(true)
    const [userLoginData, setUserLoginData] = useState({ email:"", password:""})
    const [isDataBeingValidated, setIsDataBeingValidated] = useState(false);
    const inputsData = [
        {placeholder: "email", type:"text", value:userLoginData.email, atribute: "email" },
        {placeholder: "senha", type:"password", value:userLoginData.password, atribute: "password" },
    ];
    const browsingHistory = useHistory()
    const { setUserProfileData } = useContext(UserProfileDataContext);

    function adjustUserLoginData(atributeToChange,atributeNewValue) { 
        const entriesArray = Object.entries(userLoginData);
        entriesArray.forEach( (SingleAtributeArray) => {if(SingleAtributeArray[0] === atributeToChange){SingleAtributeArray[1] = atributeNewValue }}  )
        setUserLoginData(Object.fromEntries(entriesArray))
    }

    return (
        <Container horizontalPadding = {"36px"} >
            <MainLogo />
            { inputsData.map( ({placeholder, type, value, atribute}, index) => 
                <StandardInput 
                    key = {index}
                    placeholder = {placeholder}
                    type = {type}
                    disabled = {isDataBeingValidated}
                    value = {value}
                    onChange = { (e) => adjustUserLoginData(atribute, e.target.value) }
                    marginBottom = "6px"
                />)
            }
            <ForwardButton 
                onClick = {() => CheckAndSendLoginData({userLoginData, browsingHistory, setIsDataBeingValidated, setUserProfileData})}
                text = "Entrar"
                isDataBeingValidated = {isDataBeingValidated}
            />
            <UnderButtonMessageLink linkTo = "/cadastro" text = "Não tem uma conta? Cadastre-se!"/>
        </Container>
    );
}