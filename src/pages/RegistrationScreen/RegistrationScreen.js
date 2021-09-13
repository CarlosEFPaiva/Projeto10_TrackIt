import { useState } from "react";
import { useHistory } from "react-router-dom";
import checkValidationAndSendRegistrationValues from "./RegistrationFunctions.js";
import Container from "../../shared/styles/Container.js";
import ForwardButton from "../../shared/components/BlueForwardButton.js";
import MainLogo from "../../shared/components/MainLogo.js";
import UnderButtonMessageLink from "../../shared/components/InitialScreensUnderlinedMessage.js";
import StandardInput from "../../shared/components/StandardInput.js";
import { adjustStateObjectData } from "../../shared/functions/Functions.js";

export default function RegistrationScreen({ setAreFixedBarsHidden }) {
    setAreFixedBarsHidden(true)
    const [userRegistrationData, setUserRegistrationData] = useState({ email:"", password:"", name: "", image: "" })
    const [isDataBeingValidated, setIsDataBeingValidated] = useState(false);
    const inputsData = [
        {placeholder: "email", type:"text", value:userRegistrationData.email, atribute: "email" },
        {placeholder: "senha", type:"password", value:userRegistrationData.password, atribute: "password" },
        {placeholder: "nome", type:"text", value:userRegistrationData.name, atribute: "name" },
        {placeholder: "foto", type:"text", value:userRegistrationData.image, atribute: "image" },
    ];
    const browsingHistory = useHistory()

    return (
        <Container horizontalPadding = {"36px"} >
            <MainLogo />
            <form onSubmit = { (event) => 
                checkValidationAndSendRegistrationValues({ event, userRegistrationData, setIsDataBeingValidated, browsingHistory }) }
            >
                { inputsData.map( ({placeholder, type, value, atribute}, index) => 
                    <StandardInput 
                        key = {index}
                        placeholder = {placeholder}
                        type = {type}
                        disabled = {isDataBeingValidated}
                        value = {value}
                        onChange = { (e) => adjustStateObjectData({
                            objectToChange:userRegistrationData,
                            setObjectToChange:setUserRegistrationData,
                            atributesToChange:[atribute],
                            atributesNewValues:[e.target.value]
                        })}
                        marginBottom = "6px"
                    />)
                }
                <ForwardButton 
                    text = "Cadastrar"
                    marginBottom = "25px"
                    isDataBeingValidated = {isDataBeingValidated}
                    type = "submit"
                />
            </form>
            <UnderButtonMessageLink linkTo = "/" text = "Já tem uma conta? Faça login!"/>
        </Container>
    );
}