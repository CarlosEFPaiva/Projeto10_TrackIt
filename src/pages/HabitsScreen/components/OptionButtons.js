import styled from "styled-components";

const OptionButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
    font-size: 16px;

    button:nth-child(1) {
        margin-right: 24px;
        color: #52B6FF;
    }

    button:nth-child(2) {
        width: 84px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;
        color: #FFFFFF;
    }
`

export default OptionButtons;