import axios from "axios";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"

function sendUserRegistration(body) {
    return axios.post(`${URL}/auth/sign-up`, body)
}

export {
    sendUserRegistration
}