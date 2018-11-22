"use strict";

								//FIRST TASK//
function loadGitHubUsers(searchString) {
	return fetch(`https://api.github.com/search/users?q=${searchString}`)
		.then(function(responce) {
			if(responce.status === 200) {
				return responce.json();
			}
			throw new Error(responce.statusText);
		})
		.then(function(users) {
			console.log(users.items);
			return users.items;
		})
		.catch(function(error) {
			console.log(error.message);
			return null;
		})
}



									//SECOND TASK//
function load(searchString) {
	const result = document.getElementById('result');
	while(result.firstChild) {
		result.removeChild(result.firstChild);
	}
	if(!searchString) {
		result.innerHTML = 'You should enter some name';
		return null;
	}
	return fetch(`https://api.github.com/search/users?q=${searchString}`)
		.then(function(responce) {
			if(responce.status === 200){
				return responce.json();
			}
			throw new Error(responce.statusText);
		})
		.then(function(users) {
			const usersArr = users.items;
			if(usersArr.length) {
				const ul = document.createElement('ul');
				for(let i = 0; i < usersArr.length && i < 5; i ++) {
					ul.appendChild(document.createElement('li')).innerHTML = usersArr[i].login;
				}
				result.appendChild(ul);
			} else {
				result.innerHTML = 'No users found with this name';
			}
			return users.items;
		})
		.catch(function(error) {
			result.innerHTML = `Error: ${error.message}`;
			return null;
		})
}

document.getElementById('mainForm').addEventListener('submit', function(e) {
	e.preventDefault();
	load(document.getElementById('name').value);
});

