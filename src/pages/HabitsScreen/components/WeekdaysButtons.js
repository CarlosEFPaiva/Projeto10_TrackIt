import styled from "styled-components";

export default function Weekdays() {
    const weekdaysInitials = ["D" , "S" , "T" , "Q", "Q", "S", "S"]
    return (
        <Main>
            {weekdaysInitials.map( (letter,index) => 
                <button key = {index} > {letter} </button>
            )}
        </Main>

    );
}

const Main = styled.div`
    width: 100%;
    display: flex;
    margin-top: 8px;

    button {
        width: 30px;
        height: 30px;
        margin-right: 4px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        background-color: ${ ({ isSelected }) => isSelected ? "#CFCFCF" : "#FFFFFF" };
        color: ${ ({ isSelected }) => isSelected ? "#FFFFFF" : "#CFCFCF" } ;
    }
`