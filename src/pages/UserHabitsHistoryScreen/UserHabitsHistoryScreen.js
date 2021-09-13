import Container from "../../shared/styles/Container";
import ScreenTitle from "../../shared/components/ScreenTitle";
import { useContext, useEffect, useState } from "react";
import Loading from "../../shared/components/Loading";
import RecordedDataScreenContent from "./components/UserHabitsHistoryScreenContent";
import { DownloadUserHabitsHistory } from "../../services/axiosServices";
import UserProfileDataContext from "../../contexts/App/UserProfileDataContext";
import HabitRequestContext from "../../contexts/HabitsScreen/HabitRequestContext";
import { useHistory } from "react-router";
import Swal from 'sweetalert2';

export default function RecordedDataScreen({ setAreFixedBarsHidden }) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const [ userHabitsHistory, setUserHabitsHistory ] = useState("");
    const { isHabitRequestBeingValidated } = useContext(HabitRequestContext);
    const browsingHistory = useHistory();

    useEffect( () => {
        setAreFixedBarsHidden(false);
        DownloadUserHabitsHistory(userProfileData.token)
        .then( resp => {
            setUserHabitsHistory(resp.data);
        })
        .catch( error => {
            Swal.fire({
                title: `Parece que houve algum erro!`,
                text: `Por favor, tente fazer seu login novamente`,
                icon: 'error',
              });
            browsingHistory.push("/");
        })
    },[isHabitRequestBeingValidated])
    if (!userHabitsHistory) {
        return (
            <Container backgroundColor = "#F2F2F2" horizontalPadding = "18px" topPadding = "92px" bottomPadding = "120px" >
                <Loading />
            </Container>
        );
    }

    return (
        <Container backgroundColor = "#F2F2F2" horizontalPadding = "18px" topPadding = "92px" bottomPadding = "120px" >
            <ScreenTitle text = {"Histórico"} />
            <RecordedDataScreenContent userHabitsHistory = { userHabitsHistory } />
        </Container>
    );
}