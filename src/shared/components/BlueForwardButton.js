import styled from 'styled-components';
import loadingGif from '../../assets/img/Loading-bgBlue.gif';

export default function ForwardButton(
    { text, isDataBeingValidated, onClick, marginBottom, smallerVersion },
) {
    return (
        <Button
            onClick={onClick}
            disabled={isDataBeingValidated}
            marginBottom={marginBottom}
            smallerVersion={smallerVersion}
        >
            {isDataBeingValidated ? <img src={loadingGif} alt="Loading" /> : text}
        </Button>
    );
}

const Button = styled.button`
    width: ${({ smallerVersion }) => (smallerVersion ? '84px' : '100%')};
    height: ${({ smallerVersion }) => (smallerVersion ? '35px' : '45px')};
    margin-bottom: ${({ marginBottom }) => (marginBottom || '0px')} ;
    background-color: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: ${({ smallerVersion }) => (smallerVersion ? '16px' : '20px')};
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
    
    img {
        height: ${({ smallerVersion }) => (smallerVersion ? '35px' : '45px')};;
        width: ${({ smallerVersion }) => (smallerVersion ? '35px' : '45px')};;
    }
`;
