import { sendUserRegistration } from "../../services/axiosServices.js";

function isInputValid(inputType,inputValue) {
    const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const inputsValidationConditions = [
        {type: "email", condition: isEmailValid.test(String(inputValue).toLowerCase())},
        {type: "senha", condition: inputValue.length > 5},
        {type: "nome", condition: inputValue.length > 2}
    ]

    const isValid = inputsValidationConditions.find( ({ type }) => type === inputType ).condition
    if(!isValid) {
        alert(`Por favor, insira um valor válido para ${inputType}`)
    }
    return isValid;
}

function registrationSuccessfullyCreated(setIsDataBeingValidated, browsingHistory ) {
    alert(`Cadastro criado com sucesso!`);
    setIsDataBeingValidated(false);
    browsingHistory.push("/");
}

function displayRegistrationError(error, setIsDataBeingValidated ) {
    setIsDataBeingValidated(false);
    if (error.response.status) {
        alert(`Já existe um usuário com este email!`)
    } else {
        alert(`Parece que houve algum problema com o cadastro! Por favor, tente novamente mais tarde`);
    }
}

function validateImageUrl({ userRegistrationData, setIsDataBeingValidated, browsingHistory }) {
    const UrlCheck = new Image();
    UrlCheck.addEventListener('load',  function() {
        sendUserRegistration(userRegistrationData)
            .then( () => {
                registrationSuccessfullyCreated(setIsDataBeingValidated, browsingHistory ) 
            })
            .catch( (error) => {
                displayRegistrationError(error, setIsDataBeingValidated ) 
            } )
    });
    UrlCheck.addEventListener('error', function() {
        alert(`Por favor, insira uma URL válida para foto`);
        setIsDataBeingValidated(false);
    });
    UrlCheck.src = userRegistrationData.image;
}


function checkValidationAndSendRegistrationValues({ userRegistrationData, setIsDataBeingValidated, browsingHistory }){
    if (!isInputValid("email",userRegistrationData.email)) { return };
    if (!isInputValid("senha",userRegistrationData.password)) { return };
    if (!isInputValid("nome",userRegistrationData.name)) { return };
    setIsDataBeingValidated(true);

    validateImageUrl({ userRegistrationData, setIsDataBeingValidated, browsingHistory })
}


export default checkValidationAndSendRegistrationValues