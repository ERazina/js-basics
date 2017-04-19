//Обекты - контейнер ключей и свойств
//два способа создания
var obj = new Object{};

var obj = {};

var obj = {
	string : "lalala",
	number : 24
};

//получение доступа к свойствам объекта через . или через []
obj.string;
obj["string"];

//добавление свойств
obj.new_property = 123; //123

//изменение уже существующих свойств
obj.string = "lala land";

//объекты всегда передаются по ссылкам и никогда не копируются

var a = {prop : 1},
	b = {prop : 2},
	c = {prop : 3};

a = b = c = {prop : "AllTheSame"};

console.log(a,b,c); //это 3 разных объекта

//удалить свойство объекта
delete obj.number; //удалить свойство number

//доступ к объекту
//Метод это функция, которая является свойством объекта

var obj = {
	string : 'name',
	func : function(){
		console.log(this.string);
	}
};

obj.func(); //name


var obj = {
	string : 'name',
	func : function(){
		console.log(this);
	}
};

obj.func(); //получим весь объект

//глобальность

var MYAPP = {
	//все свойства и методы, которые будут использоваться в приложении
};
