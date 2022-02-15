import { formatDate } from './format-data.js';

function getCurrentDate() {
	const date = new Date();
	const month = date.getMonth();
	const year = date.getFullYear();
	const day = date.getDate();
	const weekday = date.getDay();

	return formatDate(day, weekday, month, year);
}

export { getCurrentDate };
