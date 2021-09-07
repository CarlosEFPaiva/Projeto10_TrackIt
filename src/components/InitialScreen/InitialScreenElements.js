import styled from "styled-components";

const MainLogo = styled.img`
    width: 180px;
    height: 180px;
    margin-top: 68px;
    margin-bottom: 32px;
`

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
`

const UnderButtonMessage = styled.span`
    font-size: 14px;
    text-decoration: underline;
    color: #52B6FF;
`

export {
    MainLogo,
    Button,
    UnderButtonMessage
}