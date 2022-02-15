import { months, weekdays } from '../constants.js';

function formatDate(date) {
	const month = date.getMonth();
	const year = date.getFullYear();
	const day = date.getDate();
	const weekday = date.getDay();

	return {
		day,
		weekday: weekdays[weekday],
		month: months[month],
		year,
	};
}

export { formatDate };
