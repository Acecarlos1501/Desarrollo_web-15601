let result = document.getElementById("result");

function addToResult(val) {
	result.value += val;
}

function calculateResult() {
	result.value = eval(result.value);
}

function clearResult() {
	result.value = "";
}

function deleteLast() {
	result.value = result.value.slice(0, -1);
}

/*Modo oscuro*/
function toggleDarkMode() {
	var body = document.body;
	body.classList.toggle("dark-mode");
}