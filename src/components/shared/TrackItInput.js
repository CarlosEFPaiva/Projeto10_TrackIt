import styled from "styled-components";

const TrackItInput = styled.input`
    width: 100%;
    height: 45px;
    margin-bottom: ${ ({marginBottom}) => marginBottom ? marginBottom : "0px" };
    padding-left: 11px;
    background-color: #FFFFFF;
    border: 1px solid #D4D4D4;
    border-radius: 5px ;
    outline: none;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    color: #666666 ;
    display: ${ ({isHidden}) => isHidden ? "none" : "block" };

    ::placeholder {
        color: #DBDBDB ;
    }
`

export default TrackItInput;