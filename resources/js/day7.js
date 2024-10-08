import "./bootstrap";

// let msg = 'merhaba dunya'

// function sayHello(){
//     let msg = 'Hello World! !!!'
// console.log(msg)
// return msg
//     return ['hello', 'World']
// }

// let hello = sayHello()
// console.log(hello)

// function multiply(num1, num2){
//    return num1 * num2
//    let total = num1 * num2;
//    return total
// }

//let total = multiply(5, 3)
// let num1 = 5,
//     num2 = 2
// let total  = multiply(num1, num2)

// function sumArrayValue(array){
//     console.log(array)
//     let total = 0
//     for ( let i = 0; i < array.length; i++){
//         total += array[i]
//         return total
//     }
// }
// let dizi = [2, 4, 6, 8, 10, 20]
// sumArrayValue(dizi)

// console.log('Toplam', sumArrayValue(dizi))

// function multiply(num1, num2) {
//     let total = num1 * num2;
//     return total;
// }
// let num1 = 5,
//     num2 = 2;
// let total = multiply(num1, num2);

function sumArrayValue(array) {
    //console.log(array)
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

let dizi = [2, 4, 6, 8, 10, 20];
//sumArrayValue(dizi)
//console.log(num1, num2)

console.log("toplam", sumArrayValue(dizi));

function topla() {
    //console.log(arguments)
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(topla(2, 5, 7, 9, 10));

const sayHello = function (name) {
    return `Hello ${name}`;
};
console.log(sayHello("Levent"));


//kendi kendine cagiran function onemli
// (function(){
//         console.log('he yo!')
// })()

(function () {
    console.log("he yo!");
})();

let sayHello2 = (function(name){
    console.log(`Hello ${name}`)
})('Tayfun')

console.log(typeof sayHello2)


//normal function  (regular function)
function hello(name, surname){
    //arguments
    return `hello ${name}`
}

// 1. yol 
// (arrow function)
// const hello2 = name => {
//     return `hello ${name}`
// }

// 2. yol
const hello2 = (name, surname) =>  `hello ${name} ${surname}`;

// 3. yol
const toplama = (num1, num2, ...numbers) => {
    console.log(num1)
    console.log(num2);

    console.log(numbers)
}

toplama(2, 5, 7, 8, 10)

console.log(hello2("Ahmet", "Tonkuc")); 

function multiply( num3, num4 = 2 ){
    return num3 * num4;
 }
console.log(multiply(10))




//call vs invoke

function test (){
    console.log('Test Function call calisti')
}
//call
test()

//invoke

function invoker(func) {
    func()
  }
  invoker(test)