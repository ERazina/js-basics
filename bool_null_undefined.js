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

console.log(obj.name);
console.log(param);
console.log(arr[7]);
