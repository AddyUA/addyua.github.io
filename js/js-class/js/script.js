// const wrapper = document.createElement('div');
// 	wrapper.classList.add('test-item');

// const question = document.createElement('span');
// 	question.classList.add('test-question');
// 	question.innerText = '2 + 3';

// const form = document.createElement('form');
// 	form.classList.add('test-form');
// const name = '';
// 	form.setAttribute('name', 'radio');

// const input = document.createElement('input');
// 	input.setAttribute('type', 'radio');

// const random = Math.ceil(Math.random()* 10000000);
// const inputId = 'id${random}';
// 	input.id = inputId;

// const label = document.createElement('label');
// 	input.setAttribute('for', inputId);
// 	label.innerText = '6';

// rootElement.appendChild(wrapper);

let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")