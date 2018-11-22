"use strict";



function bind(func, context) {
	let args = [].slice.call(arguments, 2);
	return function() {
		func.apply(context, args);
	}
}



function parseIntWithCashe() {
	let cashe = {};
	return function(value) {
		if(!(value in cashe)) {
			cashe[value] = parseInt(value);
		} 
		return cashe[value];
	}
}



function getTotalSum() {
	return [].reduce.call(arguments, function(sum, current) {
		return sum + current;
	}); 
}



function toCasheUniversal(func){
	let cashe = {};
	return function() {
		let newItem = Object.keys(cashe).length;
		let i;
		for(let key in cashe) {
			if(cashe[key].args.length === arguments.length) {
				for(i = 0; i < cashe[key].args.length; i++) {
					if(JSON.stringify(cashe[key].args[i]) !== JSON.stringify(arguments[i])){
						break;
					}
				}
				if(i === cashe[key].args.length){
					return cashe[key].result;
				}
				
			}  
		}
		cashe[newItem] = {};
		cashe[newItem].args = arguments;
		cashe[newItem].result = func.apply(this, arguments);
		console.log('notCashe')
		return cashe[newItem].result;
	}
}
