const areaElement = document.querySelector('#area');
document.body.appendChild(areaElement);
let isPlay = false;

function startGame(e) {
	e.preventDefault();
	if (!isPlay) {
		isPlay = true;
		moveObject(isPlay);
	}
}

const moveObject = (isPlay) => {
	if (isPlay) {
		// Создаем элемент
		const objectElement = document.createElement('div');
		objectElement.id = 'object';

		objectElement.style.width = '50px';
		objectElement.style.height = '50px';
		objectElement.style.borderRadius = '50%';
		objectElement.style.backgroundColor = 'orange';
		objectElement.style.position = 'fixed';

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
			objectElement.style.top = currentTop + 5 + 'px';

			// Если элемент достиг нижней границы экрана, останавливаем интервал
			if (currentTop >= window.innerHeight - 50) {
				objectElement.style.top = 0;
				objectElement.style.left = Math.random() * window.innerWidth + 'px';
			}
		}, 20);
	}
};

window.addEventListener('click', () => {});
