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

export default function HabitsScreen({ setAreFixedBarsHidden }) {
    setAreFixedBarsHidden(false)
    const { userProfileData } = useContext(UserProfileDataContext);
    const { userHabitsData, setUserHabitsData } = useContext(UserHabitsDataContext)
    const [isCreateNewHabitBoxHidden, setIsCreateNewHabitBoxHidden ] = useState(true)
    const browsingHistory = useHistory()

    useEffect(() => {
        DownloadUserHabits(userProfileData.token)
            .then( resp => {
                setUserHabitsData(resp.data)
            })
            .catch( error => {
                alert("Parece que houve um erro de contato com o servidor.. :/ Por favor, tente fazer seu login novamente")
                browsingHistory.push("/")
            })
    },[]);
    
    return (
        <Container backgroundColor = "#F2F2F2" horizontalPadding = "18px" topPadding = "92px" bottomPadding = "120px" >

            <ScreenTitle text="Meus Hábitos" />
            <NewHabitButton setIsCreateNewHabitBoxHidden = {setIsCreateNewHabitBoxHidden}/>
            <CreateNewHabitBox isHidden = { isCreateNewHabitBoxHidden } setIsHidden = {setIsCreateNewHabitBoxHidden} />
            <UserHabitBox habitTitle = "Ler 1 capítulo de livro" />
            <ScreenDescription text = {"Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"} />

        </Container>
    );
}