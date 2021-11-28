import dayjs from "dayjs"

function structuredTodaysDate() {
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

export {
    structuredTodaysDate
}