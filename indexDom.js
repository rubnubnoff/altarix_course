function createCalendar(year, month) {
	const table = document.getElementById('table') || document.createElement('table');
	let firstDay = new Date(year, month, 1).getDay() ? new Date(year, month, 1).getDay() - 1 : 6;
	const lastDay = new Date(year, +month + 1, 0).getDate();

	if(!document.getElementById('table')) {
		const days = ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'];
		table.setAttribute('id', 'table');
		document.body.appendChild(table);
		for(let i = 0; i < 7; i++){
			table.appendChild(document.createElement('tr'));
			for(let u = 0; u < 7; u++) {
				if(i === 0) {
					table.getElementsByTagName('tr')[i]
						.appendChild(document.createElement('th'))
						.innerHTML = days[u];
				} else{
					table.getElementsByTagName('tr')[i]
					.appendChild(document.createElement('td'));
				}
			}
		}

	}

	const td = table.getElementsByTagName('td');
	[].forEach.call(td, function(item) {
		item.innerHTML = '';
		item.removeAttribute('class');
	});
	for(let i = 1; i <= lastDay; i++){
		td[firstDay].innerHTML = i;
		firstDay++;
	}


	table.addEventListener('click', function(e) {
		if(e.target.tagName === 'TD' && e.target.innerHTML !== '') {
			if(table.getElementsByClassName('active').length) {
				table.getElementsByClassName('active')[0].removeAttribute('class');
			}
			e.target.setAttribute('class', 'active');
		}
	});
}


