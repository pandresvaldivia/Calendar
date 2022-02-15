import '../css/main.css';
import '../css/icons.css';
import '../css/app.css';
import '../css/selected-date.css';
import '../css/calendar.css';
import '../css/button.css';
import '../css/navigation.css';

import { $prevMonth, $nextMonth } from './selectors.js';
import { changeMonth } from './utils/date.js';
import { printCurrentDate, printCalendar } from './calendar.js';

$nextMonth.addEventListener('click', () => {
	changeMonth($nextMonth);
	printCalendar();
});
$prevMonth.addEventListener('click', () => {
	changeMonth($prevMonth);
	printCalendar();
});

printCurrentDate();
