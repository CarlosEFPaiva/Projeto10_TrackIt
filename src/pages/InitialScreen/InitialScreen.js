import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { checkValidationAndSendRegistrationValues } from "./InitialScreenFunctions.js";
import Container from "../../shared/styles/Container.js";
import ForwardButton from "./components/ForwardButton.js";
import MainLogo from "./components/MainLogo.js";
import UnderButtonMessage from "./components/UnderButtonMessage.js";
import StandardInput from "../../shared/components/StandardInput.js";

export default function InitialScreen({isUserRegistered}) {
    const [userLoginData, setUserLoginData] = useState({ email:"", password:"", name: "", image: "" })
    const [isDataBeingValidated, setIsDataBeingValidated] = useState(false);
    const inputsData = [
        {placeholder: "email", type:"text", isHidden: false, value:userLoginData.email, atribute: "email" },
        {placeholder: "senha", type:"password", isHidden: false, value:userLoginData.password, atribute: "password" },
        {placeholder: "nome", type:"text", isHidden: isUserRegistered, value:userLoginData.name, atribute: "name" },
        {placeholder: "foto", type:"text", isHidden: isUserRegistered, value:userLoginData.image, atribute: "image" },
    ];
    const browsingHistory = useHistory()

    function adjustUserLoginData(atributeToChange,atributeNewValue) { 
        const entriesArray = Object.entries(userLoginData);
        entriesArray.forEach( (SingleAtributeArray) => {if(SingleAtributeArray[0] === atributeToChange){SingleAtributeArray[1] = atributeNewValue }}  )
        setUserLoginData(Object.fromEntries(entriesArray))
    }

    return (
        <Container horizontalPadding = {"36px"} >
            <MainLogo />
            { inputsData.map( ({placeholder, type, isHidden, value, atribute}, index) => 
                !isHidden ? 
                    <StandardInput 
                        key = {index}
                        placeholder = {placeholder}
                        type = {type}
                        disabled = {isDataBeingValidated}
                        value = {value}
                        onChange = { (e) => adjustUserLoginData(atribute, e.target.value) }
                        marginBottom = "6px"
                    /> 
                : "")
            }
            <ForwardButton 
                isUserRegistered = { isUserRegistered } 
                isDataBeingValidated = {isDataBeingValidated}
                onClick = { () => 
                    checkValidationAndSendRegistrationValues(userLoginData, setIsDataBeingValidated, browsingHistory) 
                } 
            />
            <Link to={isUserRegistered ? "/cadastro" : "/"}>
                <UnderButtonMessage isUserRegistered = {isUserRegistered}/>
            </Link>
        </Container>
    );
}