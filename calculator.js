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

module.exports = calculate;