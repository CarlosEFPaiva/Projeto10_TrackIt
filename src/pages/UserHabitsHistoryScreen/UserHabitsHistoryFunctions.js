import { downloadUserHabitsHistory } from "../../services/axiosServices";
import { sendErrorAlert } from "../../utils/externalLibs/sweetAlertUtils";

function getAndDisplayHabitsHistory(userProfileData, setUserHabitsHistory, navigate) {
    downloadUserHabitsHistory(userProfileData.token)
        .then( resp => {
            setUserHabitsHistory(resp.data);
        })
        .catch(async () => {
            await sendErrorAlert('Parece que houve algum erro! Por favor, tente fazer seu login novamente')
            navigate("/");
        })
}

function setWeekdaysToPortuguese (WeekdayInNumber) {
    const weekdays = ["DOM","SEG","TER","QUA","QUI","SEX","SÁB"];
    return weekdays[WeekdayInNumber]
} 

function adjustMonthYearToPortuguese (monthInNumber, yearInNumber) {
    const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    return `${months[monthInNumber]} de ${yearInNumber}`
}

export {
    getAndDisplayHabitsHistory,
    setWeekdaysToPortuguese,
    adjustMonthYearToPortuguese,
}