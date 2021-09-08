import Container from "../../shared/styles/Container.js";

import ScreenTitle from "../../shared/components/ScreenTitle.js";
import ScreenDescription from "../../shared/components/ScreenDescription.js";
import CreateNewHabitBox from "./components/CreateNewHabitBox.js";
import UserHabitBox from "./components/UserHabitBox.js";
import NewHabitButton from "./components/NewHabitButton.js";

export default function HabitsScreen() {
    
    return (
        <Container backgroundColor = "#F2F2F2" horizontalPadding = "18px" topPadding = "92px" bottomPadding = "120px" >

            <ScreenTitle text="Meus Hábitos" />
            <NewHabitButton />
            <CreateNewHabitBox />
            <UserHabitBox habitTitle = "Ler 1 capítulo de livro" />
            <ScreenDescription text = {"Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"} />

        </Container>
    );
}