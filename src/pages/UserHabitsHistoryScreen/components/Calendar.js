/* eslint-disable no-use-before-define */

import styled from 'styled-components';
import { useState } from 'react';

import LibCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../../assets/css/libCalendar.css';

import { showDatesHabits, printStyledDays } from '../../../utils/externalLibs/dayJs';
import { setWeekdaysToPortuguese, adjustMonthYearToPortuguese } from '../UserHabitsHistoryFunctions';

export default function Calendar({ userHabitsHistory, setClickedDate }) {
    const [calendarStandardValue, setCalendarStandardValue] = useState(new Date());

    return (
        <LibCalendar
            onChange={setCalendarStandardValue}
            calendarValue={calendarStandardValue}
            calendarType="US"
            onClickDay={(date) => showDatesHabits(date, userHabitsHistory, setClickedDate)}
            formatDay={(locale, date) => printStyledDays(date, userHabitsHistory, DayButton)}
            formatMonthYear={
                (locale, date) => adjustMonthYearToPortuguese(date.getMonth(), date.getFullYear())
            }
            formatShortWeekday={(locale, date) => setWeekdaysToPortuguese(date.getDay())}
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
`;
