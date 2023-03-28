const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('.list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    const li = document.createElement('li');
    li.innerText = text;
    list.appendChild(li);
    input.value = '';
  }
});

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});

list.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
});
/*Modo oscuro*/
function toggleDarkMode() {
	var body = document.body;
	body.classList.toggle("dark-mode");
}