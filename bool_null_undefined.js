//Boolean

var bool = true;

if(bool){
	console.log("Hi!");
}

//все false
console.log( Boolean(NaN) );
console.log( Boolean("") );
console.log( Boolean(0) );
console.log( Boolean(undefined) );
console.log( Boolean(null) );


//Undefined - появляется когда что-то не объявили или не передали
var obj = {},
	param,
	arr = [1,2,3];

//все выведет undefined
console.log(obj.name); //нет такого свойства
console.log(param); //переменная не определена
console.log(arr[7]); //нет такого индекса

//Null появляется только тогда, когда мы сами прописали ручками null
