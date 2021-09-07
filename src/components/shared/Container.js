import styled from "styled-components";

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    margin-top: ${({marginTop}) => marginTop ? marginTop : "0px"};
    margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : "0px"};
    padding-left: ${({horizontalPadding}) => horizontalPadding ? horizontalPadding : "0px"};
    padding-right: ${({horizontalPadding}) => horizontalPadding ? horizontalPadding : "0px"};
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default Container;