import { getCurrentDate } from './utils/date.js';
import {
	$calendarYear,
	$calendarMonth,
	$selectedYear,
	$selectedMonth,
	$selectedDay,
	$selectedWeekday,
} from './selectors.js';

function printCurrentDate() {
	const { day, weekday, month, year } = getCurrentDate();

	$calendarYear.innerText = year;
	$calendarMonth.innerText = month;
	$selectedYear.innerText = year;
	$selectedMonth.innerText = month;
	$selectedDay.innerText = day;
	$selectedWeekday.innerText = weekday;
}

export { printCurrentDate };
