import styled from "styled-components";
import FixedBar from "../../shared/styles/FixedBar.js"

export default function TopBar({isHidden}) {
    if(isHidden) {
        return "";
    }

    return (
        <FixedBar position = "top" >
            <TrackItTextLogo> TrackIt </TrackItTextLogo>
            <UserProfilePicture />
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