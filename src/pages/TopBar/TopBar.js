import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserProfileDataContext from '../../contexts/App/UserProfileDataContext.js';
import FixedBar from '../../shared/styles/FixedBar.js';
import { logOut } from './TopBarFunctions.js';

export default function TopBar({ isHidden }) {
    const { userProfileData } = useContext(UserProfileDataContext);
    const navigate = useNavigate();

    return (
        <FixedBar isHidden={isHidden} position="top">
            <TrackItTextLogo> TrackIt </TrackItTextLogo>
            <LogOutButton onClick={() => logOut(navigate)}> Sair </LogOutButton>
            <UserProfilePicture src={userProfileData.image} />
        </FixedBar>
    );
}

const TrackItTextLogo = styled.span`
    font-family: 'Playball', cursive;
    font-size: 40px;
    color: #FFFFFF;
`;

const UserProfilePicture = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #FFFFFF;
`;

const LogOutButton = styled.button`
    width: 70px;
    height: 30px;
    background-color: #FAFAFA;
    border-radius: 5px;
    color: #126BA5;
`;
