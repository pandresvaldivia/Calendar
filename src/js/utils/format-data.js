import { months, weekdays } from '../constants.js';

function formatDate(day, weekday, month, year) {
	return {
		day,
		weekday: weekdays[weekday],
		month: months[month],
		year,
	};
}

export { formatDate };
