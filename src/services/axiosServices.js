import axios from 'axios';

const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function createConfig(userToken) {
    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`,
        },
    };
    return config;
}

function sendUserRegistration(body) {
    return axios.post(`${URL}/auth/sign-up`, body);
}

function sendUserLoginData(body) {
    return axios.post(`${URL}/auth/login`, body);
}

function downloadUserHabits(userToken) {
    return axios.get(`${URL}/habits`, createConfig(userToken));
}

function createNewHabit(body, userToken) {
    return axios.post(`${URL}/habits`, body, createConfig(userToken));
}

function sendDeleteRequest(habitId, userToken) {
    return axios.delete(`${URL}/habits/${habitId}`, createConfig(userToken));
}

function downloadHabitsDueToday(userToken) {
    return axios.get(`${URL}/habits/today`, createConfig(userToken));
}

function sendHabitSelectionState(habitId, selectionState, userToken) {
    return axios.post(`${URL}/habits/${habitId}/${selectionState}`, {}, createConfig(userToken));
}

function downloadUserHabitsHistory(userToken) {
    return axios.get(`${URL}/habits/history/daily`, createConfig(userToken));
}

export {
    sendUserRegistration,
    sendUserLoginData,
    downloadUserHabits,
    createNewHabit,
    sendDeleteRequest,
    downloadHabitsDueToday,
    sendHabitSelectionState,
    downloadUserHabitsHistory,
};
