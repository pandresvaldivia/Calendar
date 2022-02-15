import { formatDate } from './format-data.js';

const date = new Date();

function getDate() {
	return formatDate(date);
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

	return `${year}-${month}-${day}T00:00:00`;
}

function isToday(date) {
	const currentDate = `${new Date().toLocaleDateString('en-CA')}T00:00:00`;

	if (date === currentDate) return true;
}

function changeMonth({ id }) {
	id === 'next'
		? date.setMonth(date.getMonth() + 1)
		: date.setMonth(date.getMonth() - 1);
}

export { getDate, getMonthData, getDatetime, isToday, changeMonth };
