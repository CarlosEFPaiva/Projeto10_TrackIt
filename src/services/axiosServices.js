import axios from "axios";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"

function createConfig(userToken) {
    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    }
    return config
}

function sendUserRegistration(body) {
    return axios.post(`${URL}/auth/sign-up`, body)
}

function sendUserLoginData(body) {
    return axios.post(`${URL}/auth/login`, body)
}

function DownloadUserHabits(userToken) {
    const config = createConfig(userToken)
    return axios.get(`${URL}/habits`, config)
}

function CreateNewHabit(body, userToken) {
    return axios.post(`${URL}/habits`,body, createConfig(userToken))
}

export {
    sendUserRegistration,
    sendUserLoginData,
    DownloadUserHabits,
    CreateNewHabit
}