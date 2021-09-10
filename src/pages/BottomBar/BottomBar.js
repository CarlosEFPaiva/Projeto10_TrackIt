import FixedBar from "../../shared/styles/FixedBar.js"
import MenuOption from "./components/MenuOption.js";
import TodaysProgress from "./components/TodaysProgress.js";

export default function BottomBar({isHidden}) {
    return (
        isHidden ? "" : 
        <FixedBar position = "bottom" >
            <MenuOption linkTo = "/habitos" title = "Hábitos"/>
            <TodaysProgress linkTo = "/hoje" title = "Hoje"/>
            <MenuOption linkTo = "/historico" title = "Histórico"/>
        </FixedBar>
    );
}