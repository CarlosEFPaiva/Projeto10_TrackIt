import { sendUserLoginData } from '../../services/axiosServices.js';
import { sendLoginToLocalStorage } from '../../utils/localStorage.js';
import { sendErrorAlert } from '../../utils/externalLibs/sweetAlertUtils.js';

function isInputValid(inputType, inputValue) {
    const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const inputsValidationConditions = [
        { type: 'email', errortext: 'Por favor, digite um email válido', condition: isEmailValid.test(String(inputValue).toLowerCase()) },
        { type: 'senha', errortext: 'Sua senha precisa ter pelo menos 6 caracteres!', condition: inputValue.length > 5 },
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

function CheckAndSendLoginData({
    event,
    userLoginData,
    navigate,
    setIsDataBeingValidated,
    setUserProfileData,
}) {
    event.preventDefault();
    if (!isInputValid('email', userLoginData.email)) { return; }
    if (!isInputValid('senha', userLoginData.password)) { return; }
    setIsDataBeingValidated(true);
    sendUserLoginData(userLoginData)
        .then((resp) => {
            setIsDataBeingValidated(false);
            const userProfileData = {
                id: resp.data.id,
                email: resp.data.email,
                name: resp.data.name,
                image: resp.data.image,
                token: resp.data.token,
            };
            setUserProfileData(userProfileData);
            sendLoginToLocalStorage(userProfileData);
            navigate('/hoje');
        })
        .catch((error) => {
            setIsDataBeingValidated(false);
            if (error.response.status === 401) {
                return sendErrorAlert('Parece que seu email e senha não conferem! Tente novamente');
            }
            return sendErrorAlert('Parece que ocorreu algum erro.. :/ Tente novamente mais tarde!');
        });
}

export {
    CheckAndSendLoginData,
};
