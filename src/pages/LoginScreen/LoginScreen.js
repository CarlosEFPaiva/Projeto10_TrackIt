import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserProfileDataContext from '../../contexts/App/UserProfileDataContext.js';

import Container from '../../shared/styles/Container.js';
import ForwardButton from '../../shared/components/BlueForwardButton.js';
import MainLogo from '../../shared/components/MainLogo.js';
import UnderButtonMessageLink from '../../shared/components/InitialScreensUnderlinedMessage.js';
import StandardInput from '../../shared/styles/StandardInput.js';

import { adjustStateObjectData } from '../../utils/stateObject';
import { IsUserLoggedAndSendToHomepage } from '../../utils/localStorage';
import { CheckAndSendLoginData } from './LoginFunctions';

export default function LoginScreen({ setAreFixedBarsHidden }) {
    setAreFixedBarsHidden(true);
    const [userLoginData, setUserLoginData] = useState({ email: '', password: '' });
    const [isDataBeingValidated, setIsDataBeingValidated] = useState(false);
    const inputsData = [
        { key: 'Login Input 1', placeholder: 'email', type: 'text', value: userLoginData.email, atribute: 'email' },
        { key: 'Login Input 2', placeholder: 'senha', type: 'password', value: userLoginData.password, atribute: 'password' },
    ];
    const navigate = useNavigate();
    const { setUserProfileData } = useContext(UserProfileDataContext);

    IsUserLoggedAndSendToHomepage(setUserProfileData, navigate);

    return (
        <Container horizontalPadding="36px">
            <MainLogo />
            <form onSubmit={
                (event) => CheckAndSendLoginData(
                    { event, userLoginData, navigate, setIsDataBeingValidated, setUserProfileData },
                )
            }
            >
                { inputsData.map(({ key, placeholder, type, value, atribute }) => (
                    <StandardInput
                        key={key}
                        placeholder={placeholder}
                        type={type}
                        disabled={isDataBeingValidated}
                        value={value}
                        onChange={(e) => adjustStateObjectData({
                            objectToChange: userLoginData,
                            setObjectToChange: setUserLoginData,
                            atributesToChange: [atribute],
                            atributesNewValues: [e.target.value],
                        })}
                        marginBottom="6px"
                    />
                ))}
                <ForwardButton
                    type="submit"
                    text="Entrar"
                    marginBottom="25px"
                    isDataBeingValidated={isDataBeingValidated}
                />
            </form>
            <UnderButtonMessageLink path="/cadastro" text="N??o tem uma conta? Cadastre-se!" />
        </Container>
    );
}
