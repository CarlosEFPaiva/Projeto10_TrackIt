import Container from "../../shared/styles/Container.js";
import ScreenTitle from "../../shared/components/ScreenTitle.js";
import ScreenDescription from "../../shared/components/ScreenDescription.js";
import CreateNewHabitBox from "./components/CreateNewHabitBox.js";
import UserHabitBox from "./components/UserHabitBox.js";
import NewHabitButton from "./components/NewHabitButton.js";
import { useContext, useEffect, useState } from "react";
import { DownloadUserHabits } from "../../services/axiosServices.js";
import UserProfileDataContext from "../../contexts/UserProfileDataContext.js";
import { useHistory } from "react-router-dom";
import UserHabitsDataContext from "../../contexts/UserHabitsDataContext.js";
import { adjustStateObjectData } from "../../shared/functions/Functions.js";
import Loading from "../../shared/components/Loading.js";

export default function HabitsScreen({ setAreFixedBarsHidden }) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const { userHabitsData, setUserHabitsData } = useContext(UserHabitsDataContext)
    const [isCreateNewHabitBoxHidden, setIsCreateNewHabitBoxHidden ] = useState(true)
    const [newHabit, setNewHabit] = useState({name:"", days:[]});
    //const [habitScreenUpdater, setHabitScreenUpdater] = useState(0);
    const [isDataBeingValidated, setIsDataBeingValidated] = useState(false);
    const browsingHistory = useHistory()


    useEffect(() => {
        setAreFixedBarsHidden(false)
        DownloadUserHabits(userProfileData.token)
            .then( resp => {
                adjustStateObjectData({
                    objectToChange:userHabitsData,
                    setObjectToChange:setUserHabitsData,
                    atributeToChange: "everyHabit",
                    atributeNewValue: resp.data
                })
            })
            .catch( error => {
                alert("Parece que houve um erro de contato com o servidor.. :/ Por favor, tente fazer seu login novamente")
                browsingHistory.push("/")
            })
    },[isDataBeingValidated]);

    if (userHabitsData.everyHabit.length === 0) {
        return (
            <Container backgroundColor = "#F2F2F2" horizontalPadding = "18px" topPadding = "92px" bottomPadding = "120px" >
                <Loading />
            </Container>
        );
    }

    return (
        <Container backgroundColor = "#F2F2F2" horizontalPadding = "18px" topPadding = "92px" bottomPadding = "120px" >

            <ScreenTitle text="Meus Hábitos" />
            <NewHabitButton setIsBoxHidden = {setIsCreateNewHabitBoxHidden}/>
            <CreateNewHabitBox 
                newHabit = { newHabit }
                setNewHabit = { setNewHabit }
                isHidden = { isCreateNewHabitBoxHidden }
                setIsHidden = { setIsCreateNewHabitBoxHidden }
                isDataBeingValidated = { isDataBeingValidated }
                setIsDataBeingValidated = { setIsDataBeingValidated }                
            />
            {userHabitsData.everyHabit.map( (habit) => <UserHabitBox key = { habit.id } habit = {habit} /> )}
            <ScreenDescription
                numberOfData = {userHabitsData.everyHabit.length}
                text = {"Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}
            />

        </Container>
    );
}