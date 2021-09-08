import styled from "styled-components"

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
    z-index: 2;
`

export default FixedBar;