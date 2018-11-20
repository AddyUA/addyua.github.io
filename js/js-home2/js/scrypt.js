
let login = prompt('Введите логин');
	if (login === 'Админ') {
		let password = prompt('Введите пароль');
		if (password === 'Чёрный Властелин') {
			alert('Добро пожаловать!');
		} else if (password === null) {
			alert('Вход отменен');
		} else {
			alert ('Пароль невереный');
		}
	} else if (login === null) {
		alert('Вход отменен');
	} else {
		alert('Я вас не знаю');
	}