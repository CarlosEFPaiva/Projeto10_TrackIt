import { useState } from "react";
import { useHistory } from "react-router-dom";
import checkValidationAndSendRegistrationValues from "./RegistrationFunctions.js";
import Container from "../../shared/styles/Container.js";
import ForwardButton from "../../shared/components/InitialScreensForwardButton.js";
import MainLogo from "../../shared/components/MainLogo.js";
import UnderButtonMessageLink from "../../shared/components/InitialScreensUnderlinedMessage.js";
import StandardInput from "../../shared/components/StandardInput.js";

export default function RegistrationScreen() {
    const [userRegistrationData, setUserRegistrationData] = useState({ email:"", password:"", name: "", image: "" })
    const [isDataBeingValidated, setIsDataBeingValidated] = useState(false);
    const inputsData = [
        {placeholder: "email", type:"text", value:userRegistrationData.email, atribute: "email" },
        {placeholder: "senha", type:"password", value:userRegistrationData.password, atribute: "password" },
        {placeholder: "nome", type:"text", value:userRegistrationData.name, atribute: "name" },
        {placeholder: "foto", type:"text", value:userRegistrationData.image, atribute: "image" },
    ];
    const browsingHistory = useHistory()

    function adjustUserRegistrationData(atributeToChange,atributeNewValue) { 
        const entriesArray = Object.entries(userRegistrationData);
        entriesArray.forEach( (SingleAtributeArray) => {if(SingleAtributeArray[0] === atributeToChange){SingleAtributeArray[1] = atributeNewValue }}  )
        setUserRegistrationData(Object.fromEntries(entriesArray))
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
                    onChange = { (e) => adjustUserRegistrationData(atribute, e.target.value) }
                    marginBottom = "6px"
                />)
            }
            <ForwardButton 
                text = "Cadastrar"
                isDataBeingValidated = {isDataBeingValidated}
                onClick = { () => 
                    checkValidationAndSendRegistrationValues({ userRegistrationData, setIsDataBeingValidated, browsingHistory }) 
                } 
            />
            <UnderButtonMessageLink linkTo = "/" text = "Já tem uma conta? Faça login!"/>
        </Container>
    );
}