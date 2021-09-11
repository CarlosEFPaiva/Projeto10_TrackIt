import { useContext } from "react";
import styled from "styled-components";
import UserProfileDataContext from "../../contexts/App/UserProfileDataContext.js";
import FixedBar from "../../shared/styles/FixedBar.js"

export default function TopBar({isHidden}) {
    const { userProfileData } = useContext(UserProfileDataContext)



    return (
        isHidden ? "" :
        <FixedBar position = "top" >
            <TrackItTextLogo> TrackIt </TrackItTextLogo>
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