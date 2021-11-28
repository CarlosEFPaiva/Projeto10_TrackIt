import { downloadHabitsDueToday, sendHabitSelectionState } from '../../services/axiosServices';
import { adjustStateObjectData } from '../../utils/stateObject';
import { sendErrorAlert } from '../../utils/externalLibs/sweetAlertUtils';

function processHabitClick(selectionState, habitId, userProfileData, setIsHabitRequestBeingValidated, setIsThisHabitBeingUpdated) {
    sendHabitSelectionState(habitId, selectionState ,userProfileData.token)
    .then( () => {
        setIsHabitRequestBeingValidated(false);
        setIsThisHabitBeingUpdated(false);
    })
        .catch(() => {
        sendErrorAlert('Parece que houve algum erro! Por favor, tente novamente mais tarde')
        setIsHabitRequestBeingValidated(false);
        setIsThisHabitBeingUpdated(false);
    })
}

function selectOrDeselectHabit(
    setIsHabitRequestBeingValidated,
    setIsThisHabitBeingUpdated,
    isHabitComplete,
    habitId,
    userProfileData
) {
    setIsHabitRequestBeingValidated(true);
    setIsThisHabitBeingUpdated(true);
    if (isHabitComplete) {
        processHabitClick("uncheck", habitId, userProfileData, setIsHabitRequestBeingValidated, setIsThisHabitBeingUpdated);
    } else {
        processHabitClick("check", habitId, userProfileData, setIsHabitRequestBeingValidated, setIsThisHabitBeingUpdated);
    }
}

function todaysHabitsCompletionPercentage (todaysHabits) {
    const totalNumberOfHabits = todaysHabits.length
    const numberOfCompletedHabits = todaysHabits.filter( ({done}) => done ).length;
    return totalNumberOfHabits === 0 ? 0 : Math.round(((numberOfCompletedHabits / totalNumberOfHabits) * 100));
}

function getAndDisplayHabitsDueToday(userProfileData, userHabitsData, setUserHabitsData, navigate) {
    downloadHabitsDueToday(userProfileData.token)
        .then( resp => {
            adjustStateObjectData({
                objectToChange: userHabitsData,
                setObjectToChange: setUserHabitsData,
                atributesToChange: ["todaysHabits", "todaysCompletionPercentage"],
                atributesNewValues: [resp.data, todaysHabitsCompletionPercentage(resp.data)]
            });
        })
        .catch(async () => {
            await sendErrorAlert('Parece que houve algum erro! Por favor, tente fazer seu login novamente');
            navigate("/");
        })
}

export {
    selectOrDeselectHabit,
    getAndDisplayHabitsDueToday,
}