import { isToday } from './date.js';

function createCell($container, datetime, day) {
	const cell = document.createElement('div');
	cell.classList.add('calendar__date');

	if (isToday(datetime)) cell.classList.add('calendar__date--selected');

	cell.innerHTML = `
        <time datetime="${datetime}">${day}</time>
    `;

	$container.appendChild(cell);
}

function clearElement($element) {
	while ($element.firstElementChild) {
		$element.firstElementChild.remove();
	}
}

export { createCell, clearElement };
