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



	//тренировка - создание элемента
	var newP = doc.createElement("p"); //создали тег p
	var four = doc.getElementById("four"); //нашли элемент с id four
	newP.innerHTML = "<i>Содержимое тега p</i>"; //впихнули в p содержимое
	newP.id = "new"; //приписали id тегу p
	four.parentNode.insertBefore(newP, four); //вставили на страницу перед id four

	four.parentNode.removeChild(newP); //удалили элемент



	var div = doc.createElement('div');  //создали div
	div.id = "new_div";                  //написали id
	div.innerHTML = "<p>Привет Мир!<p>"; //добавили содержимое 

	var last_div = doc.getElementById("last_div"); //нашли элемент
	last_div.parentNode.insertBefore(div, last_div); //вставили перед last_div



}()); 