import FixedBar from "../../shared/styles/FixedBar.js"
import MenuOption from "./components/MenuOption.js";
import TodaysProgress from "./components/TodaysProgress.js";

export default function BottomBar({isHidden}) {
    if(isHidden) {
        return "";
    }

    return (
        <FixedBar position = "bottom" >
            <MenuOption>Hábitos</MenuOption>
            <TodaysProgress> Hoje </TodaysProgress>
            <MenuOption>Histórico</MenuOption>
        </FixedBar>
    );
}