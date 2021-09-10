import styled from "styled-components";

const StandardInput = styled.input`
    width: 100%;
    height: 45px;
    margin-bottom: ${ ({marginBottom}) => marginBottom ? marginBottom : "0px" };
    padding-left: 11px;
    background-color: ${ ({disabled}) => disabled ? "#F2F2F2" : "#FFFFFF" };
    border: 1px solid #D4D4D4;
    border-radius: 5px ;
    outline: none;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    color: ${ ({disabled}) => disabled ? "#AFAFAF" : "#666666"};
    ::placeholder {
        color: #DBDBDB ;
    }
`

export default StandardInput;