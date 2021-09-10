import styled from "styled-components";
import loadingGif from "../../assets/img/Loading-bgBlue.gif"

export default function ForwardButton({ text, isDataBeingValidated , onClick }) {
    return (
        <Button onClick = {onClick} isDataBeingValidated = {isDataBeingValidated}>
            {isDataBeingValidated ? <img src = {loadingGif} /> : text}
        </Button>
    );
}

const Button = styled.button`
    width: 100%;
    height: 45px;
    margin-bottom: 25px ;
    background-color: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${ ({isDataBeingValidated}) => isDataBeingValidated ? 0.7 : 1};
    
    img {
        height: 45px;
        width: 45px;

    }
`