/**
 * ============== ПРИМЕРЫ-ШПАРГАЛКИ =============== *
 *                   ПРОТОТИПЫ                      *
 * ------------------------------------------------ *
 */

/**
 * ------------------------------------------------ *
 *                СВОЙСТВО PROTOTYPE                *
 * ------------------------------------------------ *
 * @type {{name: string}}
 */
const someObj = {
    name: 'UserName'
}
// const someObj = new Object({   /// одинаковые записи
// тут мы в конструктор Object передали тоже свойство
//     name: 'UserName'
// })
// const someObj = Object.create({}, {   /// одинаковые записи
//     name: 'UserName'
// })
console.log(someObj.__proto__) // [Object: null prototype] {}

/**
 * ------------------------------------------------ *
 *            ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ              *
 * ------------------------------------------------ *
 * @type {{name: string}}
 */
Object.prototype.testFunc = ()=> 'Hello test func' // плохая практика
console.log(someObj.testFunc()) // 'Hello test func'

/**
 * ------------------------------------------------ *
 *              ВСТРОЕННЫЕ ПРОТОТИПЫ                *
 * ------------------------------------------------ *
 * @type {{a: number}}
 */
const obj = {
    a: 4
}
obj.__proto__ = Array.prototype
console.log(obj.map(e=>e)) // []
console.log(obj.pop()) // undefined
console.log(obj.testFunc()) // Hello test func

/**
 * ------------------------------------------------ *
 *            NULL "КОРНЕВОЙ" ОБЪЕКТ                *
 * ------------------------------------------------ *
 */
let nulObj = Object.create(null)