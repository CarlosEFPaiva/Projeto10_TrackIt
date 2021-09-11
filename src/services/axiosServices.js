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
    return axios.get(`${URL}/habits`, createConfig(userToken))
}

function CreateNewHabit(body, userToken) {
    return axios.post(`${URL}/habits`,body, createConfig(userToken))
}

function SendDeleteRequest(habitId,userToken) {
    return axios.delete(`${URL}/habits/${habitId}`,createConfig(userToken) )
}

function DownloadHabitsDueToday(userToken) {
    return axios.get(`${URL}/habits/today`, createConfig(userToken))
}

export {
    sendUserRegistration,
    sendUserLoginData,
    DownloadUserHabits,
    CreateNewHabit,
    SendDeleteRequest,
    DownloadHabitsDueToday
}