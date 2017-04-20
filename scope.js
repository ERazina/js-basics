//Область видимости

var one = 1; //глобальная переменная

globalll = 24; //без var сразу становится глобальной переменной

function func(){
	var two = 2; //локальная переменная
};


//цепочка областей видимости
var k = 4;

var outerScope = function(){
	var k = 8;
	console.log(k);
	

	var innerScope = function(){
			var k = 12;
			console.log(k);
	};
	innerScope();
};
console.log(k);
outerScope();

