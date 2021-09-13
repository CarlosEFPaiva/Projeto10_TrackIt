import { sendUserRegistration } from "../../services/axiosServices.js";
import Swal from 'sweetalert2';

function isInputValid(inputType,inputValue) {
    const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const inputsValidationConditions = [
        {type: "email", errortext: "Por favor, digite um email válido", condition: isEmailValid.test(String(inputValue).toLowerCase())},
        {type: "senha", errortext: "Sua senha precisa ter pelo menos 6 caracteres!", condition: inputValue.length > 5},
        {type: "nome", errortext: "Seu nome precisa ter pelo menos 3 caracteres!", condition: inputValue.length > 2}
    ]

    const isValid = inputsValidationConditions.find( ({ type }) => type === inputType ).condition
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

function registrationSuccessfullyCreated(setIsDataBeingValidated, browsingHistory ) {
    Swal.fire({
        title: `Beleza!`,
        text: `Cadastro criado com sucesso!`,
        icon: 'success',
      });
    setIsDataBeingValidated(false);
    browsingHistory.push("/");
}

function displayRegistrationError(error, setIsDataBeingValidated ) {
    setIsDataBeingValidated(false);
    if (error.response.status) {
        Swal.fire({
            title: `Oops!`,
            text: `Já existe um usuário com este email!`,
            icon: 'error',
          });
    } else {
        Swal.fire({
            title: `Parece que houve algum problema com o cadastro!!`,
            text: `Por favor, tente novamente mais tarde`,
            icon: 'error',
          });
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
        Swal.fire({
            title: `Oops!`,
            text: `Por favor, insira uma URL válida para foto`,
            icon: 'error',
          });
        setIsDataBeingValidated(false);
    });
    UrlCheck.src = userRegistrationData.image;
}


function checkValidationAndSendRegistrationValues({ event, userRegistrationData, setIsDataBeingValidated, browsingHistory }){
    event.preventDefault()
    if (!isInputValid("email",userRegistrationData.email)) { return };
    if (!isInputValid("senha",userRegistrationData.password)) { return };
    if (!isInputValid("nome",userRegistrationData.name)) { return };
    setIsDataBeingValidated(true);

    validateImageUrl({ userRegistrationData, setIsDataBeingValidated, browsingHistory })
}


export default checkValidationAndSendRegistrationValues