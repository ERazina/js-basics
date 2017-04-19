//Циклы
//4 вида циклов

//for 
for (var i = 0; i <= 10; i++) {
	console.log(i);
};


var arr = ["string", 3.14, 2, 15, "banana"];
len = arr.length;
for(var i=0; i<len; i++){
	console.log(arr[i]); //получаем значения массива
};

//и в обратную сторону
var arr = ["string", 3.14, 2, 15, "banana"];
len = arr.length;
for(var i=10; i>=0; i--){
	console.log(arr[i]);
};


//for in - используется для обхода объектов

var obj = {
	name : "Elina",
	age : "35",
	job : 'front-end develper'
};
var prop;

for (prop in obj){
	console.log( prop + ":" +obj[prop] ); //prop - свойство obj[prop] - значение
};

//while пока k меньше 10
var k = 0;
while( k<10 ){
	console.log( k++ );
};

//do while - сначала выполняется цикл, потом проверяется условие
var h = 0;
do {
	console.log( h++ );
	} while( h < 2 );