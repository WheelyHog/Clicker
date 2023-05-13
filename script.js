let countScore = 0;
let score = document.querySelector('#score');
const areaElement = document.querySelector('#area');


function clickObject() {
	countScore++;
	score.innerHTML = countScore;
}

document.body.appendChild(areaElement);
let isPlay = false;

function startGame(event) {
	event.preventDefault();
	if (!isPlay) {
		isPlay = true;
		moveObject(isPlay);
	}
}

const gameOver = (event) => {
	if (event.target.classList.contains("parent")) {
		alert('Game Over!');
		countScore = 0;
		score.innerHTML = countScore;
		isPlay = false
		moveObject(isPlay)
		return
	}
}

const moveObject = (isPlay) => {
	if (isPlay) {
		// Создаем элемент
		const objectElement = document.createElement('div');
		objectElement.id = 'object';
		objectElement.addEventListener('click', clickObject);

		// objectElement.style.width = '50px';
		// objectElement.style.height = '50px';
		// objectElement.style.borderRadius = '50%';
		// objectElement.style.backgroundColor = 'orange';
		// objectElement.style.position = 'fixed';

		// Задаем начальное положение элемента
		objectElement.style.top = '0';
		objectElement.style.left = Math.random() * window.innerWidth + 'px';

		// Добавляем элемент на страницу
		areaElement.append(objectElement);

		// Устанавливаем интервал для движения элемента
		const intervalId = setInterval(() => {
			// Получаем текущее положение элемента
			const currentTop = parseInt(objectElement.style.top);

			// Изменяем положение элемента на следующий шаг
			objectElement.style.top = currentTop + 1 + 'px';

			// Если элемент достиг нижней границы экрана, останавливаем интервал
			if (currentTop >= window.innerHeight - 50) {
				objectElement.style.top = 0;
				objectElement.style.left = Math.random() * window.innerWidth + 'px';
			}
		}, 20);
	}
};

window.addEventListener('click', () => { });

