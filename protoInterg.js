/**
 * ============== ПРИМЕРЫ-ШПАРГАЛКИ =============== *
 *              "ЦЕПОЧКА" ПРОТОТИПОВ                *
 * ------------------------------------------------ *
 */

// пусть у нас есть некоторая функция
let fun = new Function('a','b','return a + b');
// получим полноценную функцию
console.log(fun(2,3))
// что лежит в прототипе?
// проверим что прототипом будет прототип базового объекта
console.log(fun.__proto__ === Function.prototype); // true
// в свою очередь у функции прототип это объект
console.log(fun.__proto__.__proto__ === Object.prototype); // true
// ну а у объекта прототип это null
console.log(fun.__proto__.__proto__.__proto__ === null); // true

// а теперь возмем какой-нибудь объект и унаследуем его от fun
let obj = Object.create(fun);

console.log(obj.__proto__); // [Function: anonymous]
console.log(obj.__proto__.__proto__ === Function.prototype) // true