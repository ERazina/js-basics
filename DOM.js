//DOM
(function(){
	var elements = document.getElementsByTagName('p'); //node list - работает быстрее

	console.log(elements);

	for(var i=0; i< elements.length; i++){
		console.log(elements[i]);
	}

var className = document.getElementsByClassName("paragraph"); //работает быстрее
console.log(className);

var idElement = document.getElementById("four"); // работает быстрее
console.log(idElement);

var elementSelector = document.querySelector('p'); //выведет первый элемент, который найдет
console.log(elementSelector);

var elementSelectorAll = document.querySelectorAll('p'); //выведет первый элемент, который найдет
console.log(elementSelectorAll);

var elementSelectorAll = document.querySelectorAll('div p'); //выведет первый элемент, который найдет
console.log(elementSelectorAll);

var elementSelectorAll = document.querySelectorAll('#four'); //выведет первый элемент, который найдет
console.log(elementSelectorAll);


	for(var i=0; i< elements.length; i++){
		// console.log( elements[i].tagName );
		// console.log( elements[i].parentNode ); //роодительские узлы
		// console.log( elements[i].previousSibling ); //предыдущие узлы
		// console.log( elements[i].nextSibling ); //следующие узлы
		// console.log( elements[i].nodeName ); //можно работать с текстовым узлами
		console.log( elements[i].nodeType ); //тип узла 1 - узел элемента или 3 - текстовый узел
	

		if(elements[i].nodeType === 1){
			console.log("Это узел элемента");
		}
		else if(elements[i].previousSibling.nodeType === 3){
			console.log("Это текстовый узел");
		}
	}

})();



//основные свойства узлов
console.log( document.querySelector('div').childNodes );
console.log( document.querySelector('div').children );
console.log( document.querySelector('div').lastChild );
console.log( document.querySelector('div').firstChild );
console.log( document.querySelector('div').innerHTML );