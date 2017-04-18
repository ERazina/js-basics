var str = 'aksfjld';
var str1="slkdfjsd";
var str3 = '"string" adslkfjkdsjf';
var str4 = "\"string\"фыдвлаоыд"; //экранирование \
var str5 = "оооооочень длинная строка какая получилась";
var str6 = "оооооочень \tдлинная строка\n \tкакая получилась"; // \n-перенос строки \t-табуляция
console.log(str6);


//Свойства и методы строк
//Свойства строк 
console.log(str6.length); //длина строки
console.log('hello' + ' ' + "world");
console.log("hello " .concat('world'));
console.log(str6.charAt(1)); //возвращает символ по номеру, нумерация начинается с 0
console.log(str6.charCodeAt(1)); //возвращает код символа

//возврат строк и подстрок

console.log(str6.substring(5, 10)); //вернет всю строку с 5 символа и заканчивая 10, нумерация начинается с 0

console.log(str6.substr(5, 10)); //оставить 10 символов начиная с 5

console.log(str6.slice(5, 10));//оставит символы с 5 по 10
console.log(str6.slice(-5)); //оставит последние 5 символов

console.log(str6.split(" ")); //разбивает строку на массив, делит по пробелу

console.log(str6.replace("оооооочень", "очень"));//заменяет первый аргумент на второй

console.log(str6.indexOf('а')); //вернет место буквы в слове

console.log(str6.toUpperCase());//перевести в верхний регистр
console.log(str6.toLowerCase());//перевести в нижний регистр