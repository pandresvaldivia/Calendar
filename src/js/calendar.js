import { getDate, getMonthData, getDatetime } from './utils/date.js';
import { formatDate } from './utils/format-data.js';
import { createCell, clearElement } from './utils/dom.js';
import {
	$calendarYear,
	$calendarMonth,
	$selectedYear,
	$selectedMonth,
	$selectedDay,
	$selectedWeekday,
	$monthContainer,
	$infoContainer,
	$calendarSection,
} from './selectors.js';

function printCurrentDate() {
	const datetime = getDatetime(new Date().getDate());
	$infoContainer.dateTime = datetime;

	printSelectedDate();
	printCalendar();
}

function printCalendar() {
	const { month, year, monthNum } = getDate();
	printMonth();

	$monthContainer.dateTime = `${year}-${monthNum}`;
	$calendarSection.ariaLabel = `Calendar of ${month}, ${year}`;
	$calendarYear.innerText = year;
	$calendarMonth.innerText = month;
}

function printSelectedDate(data) {
	const { day, weekday, month, year, readable } = data || getDate();

	$selectedYear.innerText = year;
	$selectedMonth.innerText = month;
	$selectedDay.innerText = day;
	$selectedWeekday.innerText = weekday;

	$infoContainer.ariaLabel = readable;
}

function printMonth() {
	const { lastDay, firstWeekday } = getMonthData();

	clearElement($monthContainer);

	for (let emptyCell = 0; emptyCell < firstWeekday; emptyCell++) {
		const $empty = document.createElement('span');
		$empty.ariaHidden = true;
		$monthContainer.appendChild($empty);
	}

	for (let day = 1; day <= lastDay; day++) {
		createCell($monthContainer, getDatetime(day), day);
	}
}

function changeDate(e) {
	const $clickedDate = e.target;

	if (!$clickedDate.classList.contains('calendar__date')) return;

	const date = formatDate(new Date($clickedDate.dateTime));

	const $selectedDate = document.querySelector('.calendar__date--selected');

	$selectedDate?.classList.remove('calendar__date--selected');
	$clickedDate.classList.add('calendar__date--selected');
	$infoContainer.dateTime = $clickedDate.dateTime;

	printSelectedDate(date);
}

export { printCurrentDate, printCalendar, changeDate };
