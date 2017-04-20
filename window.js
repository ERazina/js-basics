//Объект window

// 3 части объекта window
// DOM - объектная модель документа
// BOM - объектная модель браузера
// сам js - все объекты, переменные, функции

navigator.userAgent; //выведет информация о системе, браузере
navigator.platform; //выведет информацию об операционной системе

//skreen - здесь хранятся данные об экране
screen.width;
screen.height;

//location - информация о текущем url, дает возмжоность перезагружать страницу
window.location.reload(); //перезагрузка страницы браузера
window.location.toString(); //выводит текущий урл страницы

//frames - позволяет смотреть все фреймы.
window.frames;

//history - позволяет ходить назад-вперед по истории
window.history;

window.alert("BOM");
window.confirm('Вам есть 18?'); //OK или cancel - возвращает true или false
window.prompt("Как Вас зовут?"); //получает инпут


//пример
var bar = prompt();
if(bar === "Привет"){
	alert("Привет и тебе");
}
else{
	alert("Пока");
}
