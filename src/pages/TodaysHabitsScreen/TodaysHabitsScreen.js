import Container from "../../shared/styles/Container";
import HabitDueToday from "./components/HabitDueToday";
import ScreenTitle from "../../shared/components/ScreenTitle";
import ScreenSubtitle from "./components/ScreenSubtitle";
import dayjs from "dayjs"

export default function TodaysHabitsScreen({ setAreFixedBarsHidden }) {
    setAreFixedBarsHidden(false)
    const completionPercentage = 67;
    return (
        <Container backgroundColor = "#F2F2F2" horizontalPadding = "18px" topPadding = "92px" bottomPadding = "120px" >
            <ScreenTitle text = {StructuredTodaysDate()} />
            <ScreenSubtitle completionPercentage = {completionPercentage} />

            <HabitDueToday isHabitComplete = {false} title = {"Andar de bike"} />

            <HabitDueToday isHabitComplete = {true} title = {"Ler 1 capítulo de livro"} />

        </Container>
    );
}

function StructuredTodaysDate() {
    const WeekdayCodeCorrelation = [
        {code: 0, weekday: "Domingo"},
        {code: 1, weekday: "Segunda"},
        {code: 2, weekday: "Terça"},
        {code: 3, weekday: "Quarta"},
        {code: 4, weekday: "Quinta"},
        {code: 5, weekday: "Sexta"},
        {code: 6, weekday: "Sábado"},
    ]
    const WeekdayName = WeekdayCodeCorrelation.find( ({ code }) => code === dayjs().day() ).weekday
    return `${WeekdayName}, ${dayjs().format('DD/MM')}`
}