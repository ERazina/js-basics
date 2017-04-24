(function(){

var div = document.getElementById('test');
var style = div.style;

//первый - работает везде
div.className = "newClass"; // добавляем стили с помощью добавления класса
div.className = div.className.replace('newClass', ''); //убрали класс или так же можем заменить на другой

//второй - не работает в IE - add, remove, toggle
// div.classList.add('newClass');
// div.classList.remove("newClass");
// div.classList.toggle('newClass');



//тренировка
var newDiv = document.getElementById('test1');
console.log(newDiv);
var newStyle = newDiv.newStyle;

// newDiv.classList.add("newClass1");
newDiv.classList.toggle("newClass1");

})();