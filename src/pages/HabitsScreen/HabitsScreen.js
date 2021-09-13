import Container from "../../shared/styles/Container.js";
import ScreenTitle from "../../shared/components/ScreenTitle.js";
import ScreenDescription from "../../shared/components/ScreenDescription.js";
import CreateNewHabitBox from "./components/CreateNewHabitBox.js";
import UserHabitBox from "./components/UserHabitBox.js";
import NewHabitButton from "./components/NewHabitButton.js";
import { useContext, useEffect, useState } from "react";
import { DownloadUserHabits } from "../../services/axiosServices.js";
import UserProfileDataContext from "../../contexts/App/UserProfileDataContext.js";
import { useHistory } from "react-router-dom";
import UserHabitsDataContext from "../../contexts/App/UserHabitsDataContext.js";
import { adjustStateObjectData } from "../../shared/functions/Functions.js";
import Loading from "../../shared/components/Loading.js";
import HabitRequestContext from "../../contexts/HabitsScreen/HabitRequestContext.js";
import IsCreateHabitBoxHidden from "../../contexts/HabitsScreen/IsCreateHabitBoxHiddenContext.js";
import Swal from 'sweetalert2';

export default function HabitsScreen({ setAreFixedBarsHidden }) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const { userHabitsData, setUserHabitsData } = useContext(UserHabitsDataContext);
    const { isHabitRequestBeingValidated } = useContext(HabitRequestContext);
    const [isCreateNewHabitBoxHidden, setIsCreateNewHabitBoxHidden ] = useState(true);
    const browsingHistory = useHistory()

    useEffect(() => {
        setAreFixedBarsHidden(false)
        DownloadUserHabits(userProfileData.token)
            .then( resp => {
                adjustStateObjectData({
                    objectToChange:userHabitsData,
                    setObjectToChange:setUserHabitsData,
                    atributesToChange: ["everyHabit"],
                    atributesNewValues: [resp.data]
                })
            })
            .catch( error => {
                Swal.fire({
                    title: 'Parece que houve algum erro!',
                    text: 'Nos desculpe! :/ Tente novamente mais tarde',
                    icon: 'error',
                  });
                browsingHistory.push("/")
            })
    },[isHabitRequestBeingValidated]);

    if (!userHabitsData.everyHabit) {
        return (
            <Container backgroundColor = "#F2F2F2" horizontalPadding = "18px" topPadding = "92px" bottomPadding = "120px" >
                <Loading />
            </Container>
        );
    }
    return (
        <IsCreateHabitBoxHidden.Provider value = {{isCreateNewHabitBoxHidden, setIsCreateNewHabitBoxHidden}}>
            <Container backgroundColor = "#F2F2F2" horizontalPadding = "18px" topPadding = "92px" bottomPadding = "120px" >
                <ScreenTitle text="Meus Hábitos" />
                <NewHabitButton />
                {isCreateNewHabitBoxHidden ? "" : <CreateNewHabitBox /> }
                {userHabitsData.everyHabit.map( (habit) => <UserHabitBox key = { habit.id } habit = {habit} /> )}
                {userHabitsData.everyHabit.length ? "" : 
                    <ScreenDescription text = {"Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"} />
                }
            </Container>
        </IsCreateHabitBoxHidden.Provider>
    );
}