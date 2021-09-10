import axios from "axios";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"

function sendUserRegistration(body) {
    return axios.post(`${URL}/auth/sign-up`, body)
}

function sendUserLoginData(body) {
    return axios.post(`${URL}/auth/login`, body)
}

function DownloadUserHabits(userToken) {
    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    }
    return axios.get(`${URL}/habits`, config)
}

export {
    sendUserRegistration,
    sendUserLoginData,
    DownloadUserHabits
}