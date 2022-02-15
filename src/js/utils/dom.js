import { isToday } from './date.js';

function createCell($container, datetime, day) {
	const cell = document.createElement('time');
	cell.classList.add('calendar__date');
	cell.dateTime = datetime;
	cell.innerText = day;

	if (isToday(datetime)) cell.classList.add('calendar__date--selected');

	$container.appendChild(cell);
}

function clearElement($element) {
	while ($element.firstElementChild) {
		$element.firstElementChild.remove();
	}
}

export { createCell, clearElement };
