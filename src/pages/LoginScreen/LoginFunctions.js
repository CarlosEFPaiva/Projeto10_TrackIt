import {sendUserLoginData } from "../../services/axiosServices.js";


function sendLoginToLocalStorage(userProfileData) {
    const stringfiedUserData = JSON.stringify(userProfileData);
    localStorage.setItem("TrackItLogin", stringfiedUserData);
    
}

function isInputValid(inputType,inputValue) {
    const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const inputsValidationConditions = [
        {type: "email", condition: isEmailValid.test(String(inputValue).toLowerCase())},
        {type: "senha", condition: inputValue.length > 5}
    ]

    const isValid = inputsValidationConditions.find( ({ type }) => type === inputType ).condition
    if(!isValid) {
        alert(`Por favor, digite um valor válido de ${inputType}`)
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
                alert("Parece que suas informações de login e senha estão incorretas, tente novamente")
            } else {
                alert("Parece que ocorreu algum erro.. :/ Tente novamente mais tarde!")
            }
            setIsDataBeingValidated(false)
        })
}

export default CheckAndSendLoginData;

function checkLocalStorage() {

}