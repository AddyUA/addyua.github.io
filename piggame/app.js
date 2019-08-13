/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let scores, roundScore, activePlayer, gamePlaying;

init();

/////FUNCTIONS

function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;

	gamePlaying = true;

	//Убраем отображение кубика на странице
	document.querySelector('#dice-0').style.display = 'none';
	document.querySelector('#dice-1').style.display = 'none';

	//Обнуляем счет обоих игроков
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	//Изменяем название игроков по умолчанию на Player1 и Player2
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	//убираем класc winner и назначаем Player1 класс active
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	document.querySelector('.player-0-panel').classList.add('active');

	//document.getElementById('input').value
}

//Фун-я смены активного игрока
function nextPlayer() {
	//смена активного игрока
	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

	//сброс текущего счета
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	//добавляет если отсутствует либо уберает если присутствует нужный класс
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	//прячем кубики
	document.querySelector('#dice-0').style.display = 'none';
	document.querySelector('#dice-1').style.display = 'none';
}

//////MAIN CODE

//добавление события нажатия на кнопку Roll dice
document.querySelector('.btn-roll').addEventListener('click', function () {
	if (gamePlaying) {
		////// выбор случайного числа от 1 до 6
		let dice0 = Math.floor(Math.random() * 6) + 1;
		let dice1 = Math.floor(Math.random() * 6) + 1;

		//////вывод результата
		document.getElementById('dice-0').style.display = 'block';
		document.getElementById('dice-1').style.display = 'block';

		//заменяем картинку кубика с учетом выпавшего в рандоме числа
		document.getElementById('dice-0').src = 'dice-' + dice0 + '.png';
		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';

		if (dice0 !== 1 && dice1 !== 1) {

			//увеличиваем счет на выпавший dice
			roundScore += dice0 + dice1;

			//выводим результат на страницу
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			//Смена активного игрока
			nextPlayer();
		}
	}
});

//добавление события нажатия на кнопку HOLD
document.querySelector('.btn-hold').addEventListener('click', function () {
	if (gamePlaying) {
		//Добавляем текущий счет к общему
		scores[activePlayer] += roundScore;

		//Обновляем UI
		document.getElementById('score-' + activePlayer).textContent =
			scores[activePlayer];

		let input = document.querySelector('.win-score').value;
		let winScore;

		if (input) {
			winScore = input;
		} else {
			winScore = 100;
		}

		//Проверяем победил ли игрок
		if (scores[activePlayer] >= winScore) {
			//изменяем состояние игры на false для ее остановки
			gamePlaying = false;

			//Изменяем название игрока на WINNER
			document.getElementById('name-' + activePlayer).textContent = 'WINNER!';

			//Убраем отображение кубика на странице
			document.querySelector('.dice').style.display = 'none';

			//Убираем метку активного игрока
			document
				.querySelector('.player-' + activePlayer + '-panel')
				.classList.remove('active');
			document
				.querySelector('.player-' + activePlayer + '-panel')
				.classList.add('winner');
		} else {
			//Смена активного игрока
			nextPlayer();
		}
	}
});

//добавление события нажатия на кнопку New Game
document.querySelector('.btn-new').addEventListener('click', init);

/////// ЗАМЕТКИ

//добавляет текст лдибо значение на страницу
//document.querySelector('#current-' + activePlayer).textContent = dice;

//добавляет елементы HTML на страницу
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//let x = document.querySelector('#score-0').textContent;
//console.log(x);

//Способ для добавления либо удаления класса
//document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');