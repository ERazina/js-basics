var number = 234;

//привести к числу с плавающей точкой
number.toFixed(2);

//привести к экспоненте e
number.toExponential();

//округление до n-знаков, который указан в фукнции
number.toPrecision(3); //до первых 3-х знаков

//привести число к строке
number.toString();



//математические методы

//вычисление корня
Math.sqrt(81);

//возведение в степень - пятерку в четвертую степень
Math.pow(5, 4);

//округление
Math.floor(number); //округляет в нижнюю сторону
Math.ceil(number); //округляет в верхнюю сторону
Math.round(number); //округляет до ближайшего - самый правильный и честный

//число Pi 
Math.PI();


//NaN and infifnity

//NaN не равно ничему даже самому себе
console.log(0/0); //невозможно получить число
console.log('sdlfhj'+2); //невозможно разделить строку на число
console.log('sdlfhj'+ 2.243 * 8);//NaN токсично - т.е. если где-то подобная ошибка, то все выражение сломается

//isNaN() - возвращает true если не число
console.log(isNaN('nsadf')); //true
console.log(isNaN(123)); //false

//бесконечность - Infinity
console.log(1/0);
console.log(-1/0); //-Infinity
var inf = Infinity;
console.log(Infinity > 5784); //true
console.log(Infinity < 0); //false
console.log(2+ inf); //Шnfinity