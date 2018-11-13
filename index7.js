"use strict";


//1//
const obj = {
	name: 'Петр',
	surname: 'Петров',
	age: '20 лет'
};
let {name='Аноном', surname='Анонимович', age='? лет'} = obj;


//2//
function countLetter(string) {
	let count = 0;
	for(let letter of string) {
		if( /о/i.test(letter) ) count++;
	}
	return count;
}


//3//
const obj1 = {
	id: 'elem',
	color: 'blue',
	border: '1px solid red',
	font: '15px Arial'
}
function addStylesToElem( {id, color='blue', border='1px solid red', font='15px Arial'} ) {
	const elem = document.getElementById(id);
	elem.style.color = color;
	elem.style.border = border;
	elem.style.font = font;
}


//4//
let arr = [1, 2, 3 ,4 ,5 ,6];

function addElemsToSet(options, ...array) {
	let set = new Set();
	for(let value of array) {
		switch(options) {
			case 'even':
				if(!value%2) {
					set.add(value);
				};
				break;
			case 'odd':
				if(value%2) {
					set.add(value);
				};
				break;
			case 'all':
				set.add(value);
				break;
			default:
				set.add(value);
				throw new Error('Первый аргумент должен быть "even", "odd" или "all"!');
		}
	}
	return set;
}
console.log(addElemsToSet('odd', 1, 2, 3, 4 ,5, 6))

//5//

class Person {
	constructor(sex, age, activity, classValue) {
		this.age = age;
		this.activity = activity;
		this.classValue = classValue;
		this.getSex = function() {
			return sex;
		}
	}
	increaseAge() {
		this.age++;
		switch(this.age) {
			case 7:
				this.changeActivity('Школа');
				this.changeClassValue('Школьник');
				break;
			case 17:
				this.changeActivity('ВУЗ');
				this.changeClassValue('Студент');
				break;
			case 23:
				this.changeActivity('Работа');
				this.changeClassValue('Работник');
				break;
			case 63:
				if(this.getSex() === 'female'){
					this.changeActivity('Лавочка');
					this.changeClassValue('Пенсионер');
				}
				break;
			case 65:
				if(this.getSex() === 'male'){
					this.changeActivity('Лавочка');
					this.changeClassValue('Пенсионер');
				}
				break;
		}
	}
	changeActivity(activity) {
		this.activity = activity;
	}
	changeClassValue(classValue) {
		this.classValue = classValue;
	}
}

class Male extends Person {
	constructor(age, activity, classValue) {
		super('male', age, activity, classValue);
	}
}
class Female extends Person {
	constructor(age, activity, classValue) {
		super('female', age, activity, classValue);
	}
}




