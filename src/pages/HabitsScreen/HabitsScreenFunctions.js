import { downloadUserHabits, createNewHabit, sendDeleteRequest } from "../../services/axiosServices"
import { adjustStateObjectData } from "../../shared/functions/Functions"
import { sendConfirmAlert, sendErrorAlert, sendSuccessAlert } from "../../utils/externalLibs/sweetAlertUtils"

function getAndDisplayUserHabits({userProfileData, userHabitsData, setUserHabitsData, navigate}) {
    downloadUserHabits(userProfileData.token)
    .then((resp) => {
        adjustStateObjectData({
            objectToChange:userHabitsData,
            setObjectToChange:setUserHabitsData,
            atributesToChange: ["everyHabit"],
            atributesNewValues: [resp.data]
        })
    })
    .catch( async () => {
        await sendErrorAlert('Parece que houve um erro com o servidor! Tente novamente mais tarde')
        navigate("/")
    })
}

async function areInputsValid(newHabit, userHabitsData) {
    if (!newHabit.name.length || newHabit.name.length > 40) {
        await sendErrorAlert('Preencha o campo de nome com até 40 caracteres!')
        return false;
    } else if (!newHabit.days.length) {
        await sendErrorAlert('Selecione pelo menos um dia da semana!')
        return false;
    } else if(userHabitsData.everyHabit.find( ({name}) => name.toLowerCase() === newHabit.name.toLowerCase() )) {
        await sendErrorAlert('Parece que você já tem um hábito com esse nome!')
        return false;
    }
    return true;
}

function checkValuesAndSendNewHabitToServer(
    newHabit,
    userHabitsData,
    setIsHabitRequestBeingValidated,
    userProfileData,
    setIsCreateNewHabitBoxHidden,
    setNewHabit
) {
    if ( areInputsValid(newHabit, userHabitsData) ) {
        setIsHabitRequestBeingValidated(true);
        createNewHabit(newHabit, userProfileData.token)
            .then( async () => {
                await sendSuccessAlert('Agore você só precisa seguir esse novo hábito, ok?')
                setIsCreateNewHabitBoxHidden(true);
                setNewHabit({name:"", days:[]});
                setIsHabitRequestBeingValidated(false);
            })
            .catch( async () => {
                await sendErrorAlert('Parece que houve um problema com o servidor! Tente novamente mais tarde')
                setIsHabitRequestBeingValidated(false);
            });
    }
}

async function deleteHabit(setIsHabitRequestBeingValidated, habitId, userProfileData) {
    const alert = await sendConfirmAlert('Deseja mesmo deletar esse hábito?', "Pode deletar!");
    if (alert.isConfirmed) {
        setIsHabitRequestBeingValidated(true)
        sendDeleteRequest(habitId, userProfileData.token)
        .then(() => {
            sendSuccessAlert('Hábito deletado com sucesso!')
            setIsHabitRequestBeingValidated(false)
        })
        .catch(() => {
            sendErrorAlert('Parece que houve um problema com o servidor! Tente novamente mais tarde')
            setIsHabitRequestBeingValidated(false)
        })
    } 
}

function selectDay(clickedDay, isUnclickable, habit, setHabit) {
        if(!isUnclickable) {
            const updatedhabit = {...habit}
            if(habit.days.includes(clickedDay)){
                updatedhabit.days = habit.days.filter( (day) => day !== clickedDay );
            } else {
                updatedhabit.days.push(clickedDay)
            }
            setHabit(updatedhabit)
        }
    }

export {
    getAndDisplayUserHabits,
    checkValuesAndSendNewHabitToServer,
    deleteHabit,
    selectDay
}