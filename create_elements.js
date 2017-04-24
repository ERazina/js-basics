//создание элементов
(function(){
	var doc = document, //кэширование переменной - сохранили dосument чтобы каждый раз не создавать новый запрос
	elem = doc.createElement("p"),
		//content = document.createTextNode('Динамически отображаемое содержимое'),
		wrappedP = doc.getElementById("wrapped");

	 //создающий текстовый узел
	// console.log ( elem );
	elem.innerHTML = "<strong>Динамически отображаемое содержимое</strong>" //через innerHTML можем добавлять теги

	//elem.appendChild(content);
	//elem.setAttribute('id', 'mrDyn'); //создаем элемент с id "mrDyn"
	elem.id = "mrDyn"; //или так

	//console.log( elem );
	//wrappedP.parentNode.removeChild(elem); //удаление элемента
	wrappedP.parentNode.removeChild(wrappedP); //удаление элемента
	//wrapeedP.parentNode.appendChild(elem);
	//wrappedP.parentNode.insertBefore(elem, wrappedP);  //вставляем до wrapped элемент elem
	// wrappedP.parentNode.replaceChild(elem, wrappedP); // заменяем elem на wrapped
}()); 