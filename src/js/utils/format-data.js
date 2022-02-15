import { months, weekdays } from '../constants.js';

const options = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

function formatDate(date) {
	const month = date.getMonth();
	const year = date.getFullYear();
	const day = date.getDate();
	const weekday = date.getDay();

	return {
		day,
		weekday: weekdays[weekday],
		monthNum: month.toLocaleString('en-US', {
			minimumIntegerDigits: 2,
		}),
		month: months[month],
		year,
		readable: date.toLocaleString('en-US', options),
	};
}

export { formatDate };
