let display = document.querySelector('.display');

function addToDisplay(value) {
	display.innerHTML += value;
}

function clearDisplay() {
	display.innerHTML = '';
}

function backspace() {
	display.innerHTML = display.innerHTML.slice(0, -1);
}

function calculate() {
	try {
		display.innerHTML = eval(display.innerHTML);
	} catch (error) {
		display.innerHTML = 'Error';
	}
}
