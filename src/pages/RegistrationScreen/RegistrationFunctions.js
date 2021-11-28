import { sendUserRegistration } from '../../services/axiosServices.js';
import { sendErrorAlert, sendSuccessAlert } from '../../utils/externalLibs/sweetAlertUtils.js';

function isInputValid(inputType, inputValue) {
    const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const inputsValidationConditions = [
        { type: 'email', errortext: 'Por favor, digite um email válido', condition: isEmailValid.test(String(inputValue).toLowerCase()) },
        { type: 'senha', errortext: 'Sua senha precisa ter pelo menos 6 caracteres!', condition: inputValue.length > 5 },
        { type: 'nome', errortext: 'Seu nome precisa ter pelo menos 3 caracteres!', condition: inputValue.length > 2 },
    ];

    const isValid = inputsValidationConditions.find(({ type }) => type === inputType).condition;
    const errorMessage = inputsValidationConditions.find(
        ({ type }) => type === inputType,
    ).errortext;
    if (!isValid) {
        sendErrorAlert(errorMessage);
    }
    return isValid;
}

function registrationSuccessfullyCreated(setIsDataBeingValidated, navigate) {
    sendSuccessAlert('Cadastro criado com sucesso!');
    setIsDataBeingValidated(false);
    navigate('/');
}

function displayRegistrationError(error, setIsDataBeingValidated) {
    setIsDataBeingValidated(false);
    if (error.response.status === 409) {
        return sendErrorAlert('Já existe um usuário com este email!');
    }
    return sendErrorAlert('Parece que houve algum problema com o servidor! Tente novamente mais tarde!');
}

function validateImageUrl({ userRegistrationData, setIsDataBeingValidated, navigate }) {
    const UrlCheck = new Image();
    UrlCheck.addEventListener('load', () => {
        sendUserRegistration(userRegistrationData)
            .then(() => {
                registrationSuccessfullyCreated(setIsDataBeingValidated, navigate);
            })
            .catch((error) => {
                displayRegistrationError(error, setIsDataBeingValidated);
            });
    });
    UrlCheck.addEventListener('error', () => {
        sendErrorAlert('Por favor, insira uma URL válida para foto');
        setIsDataBeingValidated(false);
    });
    UrlCheck.src = userRegistrationData.image;
}

function checkValidationAndSendRegistrationValues({
    event,
    userRegistrationData,
    setIsDataBeingValidated,
    navigate,
}) {
    event.preventDefault();
    if (!isInputValid('email', userRegistrationData.email)) { return; }
    if (!isInputValid('senha', userRegistrationData.password)) { return; }
    if (!isInputValid('nome', userRegistrationData.name)) { return; }
    setIsDataBeingValidated(true);

    validateImageUrl({ userRegistrationData, setIsDataBeingValidated, navigate });
}

export {
    checkValidationAndSendRegistrationValues,
};
