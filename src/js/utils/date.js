import { formatDate } from './format-data.js';

const date = new Date();

function getCurrentDate() {
	const month = date.getMonth();
	const year = date.getFullYear();
	const day = date.getDate();
	const weekday = date.getDay();

	return formatDate(day, weekday, month, year);
}

function getMonthData() {
	const lastDay = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDate();
	const firstWeekday = new Date(
		date.getFullYear(),
		date.getMonth(),
		1
	).getDay();

	return {
		lastDay,
		firstWeekday,
	};
}

function getDatetime(day) {
	const month = (date.getMonth() + 1).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
	});
	const year = date.getFullYear();
	day = day.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
	});

	return `${year}-${month}-${day}`;
}

function isToday(date) {
	const currentDate = new Date().toLocaleDateString('en-CA');

	if (date === currentDate) return true;
}

export { getCurrentDate, getMonthData, getDatetime, isToday };
