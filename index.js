'use strict';


function calculate(operand1, operator, operand2) {
	if(typeof operand1 !== 'number' || typeof operand2 !== 'number'){
		throw new TypeError('First and third arguments must both be numbers');
	} else{
		switch(operator) {
			case '+':
				return operand1 + operand2;
			case '-':
				return operand1 - operand2;
			case '*':
				return operand1 * operand2;
			case '/':
				return operand1 / operand2;
			default:
				throw new Error('Second argument must be +, -, *, /');
		}
	}
}


function findSubstring(array, substring) {
	let count = 0;
	let reg = new RegExp(substring);
	for(let i=0; i < array.length; i++) {
		if(array[i].search(reg) !== -1){
			count++;
		}
	}
	return count;
}


function formatNumber(number) {
	if(typeof number !== 'number') throw new TypeError('You can enter only number');
	let numberArr = number.toString().split('.');
	let integerPart = +numberArr[0];
	let	integerPartArr = [];
	let	integerPartString = '';

	while(integerPart >= 1000 || integerPart <= -1000) {
		if(integerPart > 0) {
			integerPartArr.unshift((integerPart % 1000).toString());
			integerPart = Math.floor(integerPart / 1000);
		} else{
			integerPartArr.unshift((-integerPart % 1000).toString());
			integerPart = Math.ceil(integerPart / 1000);
		}
	}
	for(let i=0 ; i<integerPartArr.length; i++) {
		switch (integerPartArr[i].length){
			case 1:
				integerPartArr[i] = `00${integerPartArr[i]}`;
				break;
			case 2:
				integerPartArr[i] = `0${integerPartArr[i]}`;
				break;
			default:
				break;
		}
	}
	integerPartArr.unshift(integerPart);
	integerPartString = integerPartArr.join(' ');
	
	if(numberArr[1]){
		let fractionalPart = numberArr[1];
		let fractionalPartString = '';
		let fractionalPartFixed = Math.round(+fractionalPart / (Math.pow(10, fractionalPart.length-2)));
		if(fractionalPartFixed.toString().length == 1) {
			fractionalPartFixed = `0${fractionalPartFixed}`;
		}             
		fractionalPartString = fractionalPart.length > 2 ? fractionalPartFixed : fractionalPart;
		return `${integerPartString},${fractionalPartString}`;
	} else{
		return `${integerPartString}`;
	}
}
