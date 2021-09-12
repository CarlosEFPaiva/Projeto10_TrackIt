import LibCalendar from 'react-calendar';
import styled from "styled-components";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import "../../../assets/css/libCalendar.css"
import dayjs from "dayjs";

export default function Calendar({ userHabitsHistory, setClickedDate }) {
    const [calendarStandardValue, setCalendarStandardValue] = useState(new Date());

    function showDatesHabits(date, userHabitsHistory) {
        const TodaysDate = dayjs(new Date()).format("DD/MM/YYYY");
        const givenDate = dayjs(date).format("DD/MM/YYYY");
        const UserGivenDateHabitHistory = userHabitsHistory.find( ({day}) => day === givenDate );
        if (UserGivenDateHabitHistory && givenDate !== TodaysDate ) {
            setClickedDate(givenDate);
        }
    }
    
    return (
        <LibCalendar
            onChange={setCalendarStandardValue}
            calendarValue={calendarStandardValue}
            calendarType = {"US"}
            onClickDay = { (date, event) => showDatesHabits(date, userHabitsHistory ) }
            formatDay = {(locale,date) => printStyledDays(date,userHabitsHistory)}
            formatMonthYear = {(locale,date) => adjustMonthYearToPortuguese (date.getMonth(), date.getFullYear())}
            formatShortWeekday = { (locale,date) => setWeekdaysToPortuguese(date.getDay()) }
        />
    );
}

const DayButton = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &.incomplete-habits {
        background-color: #EA5766;
        color: #000    
    }
    &.complete-habits {
        background-color: #8CC654;    
    }
`

function setWeekdaysToPortuguese (WeekdayInNumber) {
    const weekdays = ["DOM","SEG","TER","QUA","QUI","SEX","SÁB"];
    return weekdays[WeekdayInNumber]
} 

function adjustMonthYearToPortuguese (monthInNumber, yearInNumber) {
    const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    return `${months[monthInNumber]} de ${yearInNumber}`
}


function printStyledDays(date, userHabitsHistory) {
    const TodaysDate = dayjs(new Date()).format("DD/MM/YYYY");
    const givenDate = dayjs(date).format("DD/MM/YYYY");
    const UserGivenDateHabitHistory = userHabitsHistory.find( ({day}) => day === givenDate );
    let buttonClass = "";
    if (UserGivenDateHabitHistory && givenDate !== TodaysDate ) {
        if (UserGivenDateHabitHistory.habits.every( ({done}) => done )) {
            buttonClass = "complete-habits";
        } else {
            buttonClass = "incomplete-habits";
        }
    }
    return (
        <DayButton className = { buttonClass } >{dayjs(date).format("DD")}</DayButton>
    );
}