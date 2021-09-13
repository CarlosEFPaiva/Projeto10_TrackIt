import {sendUserLoginData } from "../../services/axiosServices.js";
import Swal from 'sweetalert2';

function sendLoginToLocalStorage(userProfileData) {
    const stringfiedUserData = JSON.stringify(userProfileData);
    localStorage.setItem("TrackItLogin", stringfiedUserData);
    
}

function isInputValid(inputType,inputValue) {
    const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const inputsValidationConditions = [
        {type: "email", errortext: "Por favor, digite um email válido",condition: isEmailValid.test(String(inputValue).toLowerCase())},
        {type: "senha", errortext: "Sua senha precisa ter pelo menos 6 caracteres!", condition: inputValue.length > 5}
    ]

    const isValid = inputsValidationConditions.find( ({ type }) => type === inputType ).condition;
    const errorMessage = inputsValidationConditions.find( ({ type }) => type === inputType ).errortext;
    if(!isValid) {
        Swal.fire({
            title: `Oops!`,
            text: errorMessage,
            icon: 'error',
          });
    }
    return isValid;
}

function CheckAndSendLoginData({ event, userLoginData, browsingHistory, setIsDataBeingValidated, setUserProfileData }) {
    event.preventDefault();
    if (!isInputValid("email",userLoginData.email)) { return };
    if (!isInputValid("senha",userLoginData.password)) { return };
    setIsDataBeingValidated(true)
    sendUserLoginData(userLoginData)
        .then( resp => {
            setIsDataBeingValidated(false)
            const userProfileData = {
                id: resp.data.id,
                email: resp.data.email,
                name: resp.data.name,
                image: resp.data.image,
                token: resp.data.token
            }
            setUserProfileData(userProfileData)
            sendLoginToLocalStorage(userProfileData)
            browsingHistory.push("/hoje")
        })
        .catch( error => {
            if (error.response.status === 401) {
                Swal.fire({
                    title: `Oops!`,
                    text: "Parece que seu email e senha não conferem! Tente novamente",
                    icon: 'error',
                  });
            } else {
                Swal.fire({
                    title: `Oops!`,
                    text: "Parece que ocorreu algum erro.. :/ Tente novamente mais tarde!",
                    icon: 'error',
                  });
            }
            setIsDataBeingValidated(false)
        })
}

export default CheckAndSendLoginData;

function checkLocalStorage() {

}