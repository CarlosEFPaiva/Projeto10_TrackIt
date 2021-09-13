import { useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import UserProfileDataContext from "../../contexts/App/UserProfileDataContext.js";
import FixedBar from "../../shared/styles/FixedBar.js";
import Swal from 'sweetalert2';

export default function TopBar({isHidden}) {
    const { userProfileData } = useContext(UserProfileDataContext)
    const browsingHistory = useHistory();

    function logOut() {
        Swal.fire({
            title: 'Tem certeza?',
            text: 'Deseja realmente sair?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim!',
            cancelButtonText: 'Cancelar'
          })
          .then( result => { if(result.isConfirmed) {
            localStorage.removeItem("TrackItLogin");
            browsingHistory.push("/");
          }})
    }

    return (
        isHidden ? "" :
        <FixedBar position = "top" >
            <TrackItTextLogo> TrackIt </TrackItTextLogo>
            <LogOutButton onClick = { logOut } > Sair </LogOutButton>
            <UserProfilePicture src = {userProfileData.image}/>
        </FixedBar>
    );
}

const TrackItTextLogo = styled.span`
    font-family: 'Playball', cursive;
    font-size: 40px;
    color: #FFFFFF;
`

const UserProfilePicture = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #FFFFFF;
`

const LogOutButton = styled.button`
    width: 70px;
    height: 30px;
    background-color: #FAFAFA;
    border-radius: 5px;
    color: #126BA5;
`