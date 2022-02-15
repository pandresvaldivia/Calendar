import { getDate, getMonthData, getDatetime } from './utils/date.js';
import { createCell, clearElement } from './utils/dom.js';
import {
	$calendarYear,
	$calendarMonth,
	$selectedYear,
	$selectedMonth,
	$selectedDay,
	$selectedWeekday,
	$monthContainer,
} from './selectors.js';

function printCurrentDate() {
	printSelectedDate();
	printCalendar();
}

function printCalendar() {
	const { month, year } = getDate();
	printMonth();

	$calendarYear.innerText = year;
	$calendarMonth.innerText = month;
}

function printSelectedDate() {
	const { day, weekday, month, year } = getDate();

	$selectedYear.innerText = year;
	$selectedMonth.innerText = month;
	$selectedDay.innerText = day;
	$selectedWeekday.innerText = weekday;
}

function printMonth() {
	const { lastDay, firstWeekday } = getMonthData();

	clearElement($monthContainer);

	for (let emptyCell = 0; emptyCell < firstWeekday; emptyCell++) {
		const $empty = document.createElement('div');
		$monthContainer.appendChild($empty);
	}

	for (let day = 1; day <= lastDay; day++) {
		createCell($monthContainer, getDatetime(day), day);
	}
}

export { printCurrentDate, printCalendar };
