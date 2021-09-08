import styled from "styled-components";

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    padding-top: ${ ({topPadding}) => topPadding ? topPadding : "0px" };
    padding-bottom: ${ ({bottomPadding}) => bottomPadding ? bottomPadding : "0px" };
    padding-left: ${ ({horizontalPadding}) => horizontalPadding ? horizontalPadding : "0px" };
    padding-right: ${ ({horizontalPadding}) => horizontalPadding ? horizontalPadding : "0px" };
    background-color: ${ ({backgroundColor}) => backgroundColor ? backgroundColor : "#FFFFFF"};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    position: relative;
`

export default Container;