import styled from "styled-components";

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    padding: ${ ({verticalPadding}) => verticalPadding ? verticalPadding : "0px" } ${ ({horizontalPadding}) => horizontalPadding ? horizontalPadding : "0px" };
    background-color: ${ ({backgroundColor}) => backgroundColor ? backgroundColor : "#FFFFFF"};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`

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

const FixedBar = styled.header`
    width: 100%;
    height: 70px;
    padding: 0px ${ ({position}) => position === "top" ? "18px" : "32px" };
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0px;
    top: ${ ({position}) => position === "top" ? "0px" : "" };
    bottom: ${ ({position}) => position === "top" ? "" : "0px" };
    background-color: ${ ({position}) => position === "top" ? "#126BA5" : "#FFFFFF" };
    filter: ${ ({position}) => position === "top" ? "drop-shadow(0px 4px 4px 0px rgba(0,0,0,0.15) )" : "none" } ;
`

const ScreenTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    color: #126BA5;
`

const ScreenDescription = styled.div`
    width: 100%;
    margin-top: 28px;
    word-wrap: break-word;
    font-size: 18px;
    color: #666666;
`

export {
    Container,
    TrackItInput,
    FixedBar,
    ScreenTitle,
    ScreenDescription
};