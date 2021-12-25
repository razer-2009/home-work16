alert("Javacript подключен");
let test = document.querySelector('#test');

let questions = [
	{
		text: 'Сокращенное название таблицы стилей?',
		right: 'CSS',
	},
	{
		text: 'Кто верстает сайты?',
		right: 'верстальщик',
	},
	{
		text: 'Самый популярный CSS-фреймворк?',
		right: 'Bootstrap',
	},
];


for (let question of questions) {
	let div = document.createElement('div');
	test.appendChild(div);
	
	let p = document.createElement('p');
	p.innerHTML = question.text;
	div.appendChild(p);
	
	let input = document.createElement('input');
	input.dataset.right = question.right;
	div.appendChild(input);
}

let button = document.querySelector('#button');
button.addEventListener('click', function() {
	let inputs = document.querySelectorAll('#test input');
	
	for (let input of inputs) {
		input.classList.remove('correct');
		input.classList.remove('incorrect');
		
		if (input.value == input.dataset.right) {
			input.classList.add('correct');
		} else {
			input.classList.add('incorrect');
		}
	}
});