import Container from "../../shared/styles/Container";
import HabitDueToday from "./components/HabitDueToday";
import ScreenTitle from "../../shared/components/ScreenTitle";
import ScreenSubtitle from "./components/ScreenSubtitle";

export default function TodaysHabitsScreen({ setAreFixedBarsHidden }) {
    setAreFixedBarsHidden(false)
    const completionPercentage = 67;
    return (
        <Container backgroundColor = "#F2F2F2" horizontalPadding = "18px" topPadding = "92px" bottomPadding = "120px" >
            <ScreenTitle text = "Segunda, 17/05" />
            <ScreenSubtitle completionPercentage = {completionPercentage} />

            <HabitDueToday isHabitComplete = {false} title = {"Andar de bike"} />

            <HabitDueToday isHabitComplete = {true} title = {"Ler 1 capítulo de livro"} />

        </Container>
    );
}