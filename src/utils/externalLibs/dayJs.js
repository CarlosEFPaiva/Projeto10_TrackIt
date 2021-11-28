import dayjs from 'dayjs';

function structuredTodaysDate() {
    const WeekdayCodeCorrelation = [
        { code: 0, weekday: 'Domingo' },
        { code: 1, weekday: 'Segunda' },
        { code: 2, weekday: 'Terça' },
        { code: 3, weekday: 'Quarta' },
        { code: 4, weekday: 'Quinta' },
        { code: 5, weekday: 'Sexta' },
        { code: 6, weekday: 'Sábado' },
    ];
    const WeekdayName = WeekdayCodeCorrelation.find(({ code }) => code === dayjs().day()).weekday;
    return `${WeekdayName}, ${dayjs().format('DD/MM')}`;
}

function showDatesHabits(date, userHabitsHistory, setClickedDate) {
    const TodaysDate = dayjs(new Date()).format('DD/MM/YYYY');
    const givenDate = dayjs(date).format('DD/MM/YYYY');
    const UserGivenDateHabitHistory = userHabitsHistory.find(({ day }) => day === givenDate);
    if (UserGivenDateHabitHistory && givenDate !== TodaysDate) {
        setClickedDate(givenDate);
    }
}

function printStyledDays(date, userHabitsHistory, DayButton) {
    const TodaysDate = dayjs(new Date()).format('DD/MM/YYYY');
    const givenDate = dayjs(date).format('DD/MM/YYYY');
    const UserGivenDateHabitHistory = userHabitsHistory.find(({ day }) => day === givenDate);
    let buttonClass = '';
    if (UserGivenDateHabitHistory && givenDate !== TodaysDate) {
        if (UserGivenDateHabitHistory.habits.every(({ done }) => done)) {
            buttonClass = 'complete-habits';
        } else {
            buttonClass = 'incomplete-habits';
        }
    }
    return (
        <DayButton className={buttonClass}>
            {dayjs(date).format('DD')}
        </DayButton>
    );
}

export {
    structuredTodaysDate,
    showDatesHabits,
    printStyledDays,
};
