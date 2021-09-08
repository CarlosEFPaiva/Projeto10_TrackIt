import styled from "styled-components";
import trackItLogo from "../../../assets/img/Logo.png"

export default function MainLogo() {
    return (
        <ImgLogo src = { trackItLogo } />
    );
}

const ImgLogo = styled.img`
    width: 180px;
    height: 180px;
    margin-top: 68px;
    margin-bottom: 32px;
`