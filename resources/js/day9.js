import "./bootstrap";

// higher Order Fonksiyonlar - daha yuksek mertebe fonksiyonlar

// const fonksiyon = number => number ** 2

// function cube(cb, number){
//     return cb(number) * number

// }
// console.log(cube(fonksiyon, 3))

// const a = (s1) => {
//     const b = (s2) => {
//         const c = (s3) => {
//             return s1 + s2 + s3;
//         };
//         return c;
//     };
//     return b;
// };
// console.log(a(5)(10)(20));

// const numbers = [1,3,5,7,9]
//  let total = 0
//  numbers.forEach(function (number) {
//  total += number
//     total = total + number;
//   })
//  console.log(total)

// const numbers = [1,3,5,7,9]
// let total = 0
// numbers.forEach(number => total += number)
// console.log(total)

// const numbers = [1,3,5,7,9]
// let total = 0
// calculate = numbers => total += numbers
// numbers.forEach(calculate)
// console.log(total)

// function sayHello() {
//     console.log("Hello");
// }

//setTimeout(sayHello, 1000)
//clearTimeout

//setInterval(sayHello, 1000);
//clearInterval
//const Interval = setInterval(sayHello, 1000);

// setTimeout(() =>{
//     clearInterval(Interval)
//     console.log('interval islemi iptal edildi')
// },6000)

// const timeout = setTimeout(() => {
//     clearInterval(Interval);
//     console.log("interval islemi iptal edildi");
// }, 6000);

// setTimeout(() => {
//     clearTimeout(timeout);
//     console.log("Timeout islemi iptal edildi, interval devam edecek...");
// }, 5000);

// const numbers = [1, 3, 5, 7, 9];
// console.log(
//     numbers.reduce((oldValue, currentValue) => {
//         return oldValue + currentValue;
//     }, 0)
// );

// const numbers = [1, 3, 5, 7, 9];
// console.log(
//     numbers.reduce((oldValue, currentValue) => oldValue + currentValue, 0)
// );

// let total = 0;
// numbers.forEach((number) => (total += number && number < 9));
// console.log(total);

// let users = [
//     { id: 1,
//       name: "Levent",
//       age: 27,
//       gender: 1

//     },
//     {
//       id: 2,
//       name: 'Mehmet',
//       age: 30,
//       gender: 1
//     },
//     {
//       id: 3,
//       name: 'Yakup',
//       age: 29,
//       gender: 1
//     },
//     {
//       id: 4,
//       name: 'Nazli',
//       age: 45,
//       gender: 1
//     }
// ]
// users = users.map(user => {
//     if (user.id === 2 ){
//         user.name  = 'Hakan'
//     }
//     return user
// })
// console.log(users.some((user) => user.gender === 1));
//console.log(users.every((user) => user.gender === 1));
//console.log(users)
//console.log(numbers.filter((number) => number > 3));

// const women = users.filter(user => user.gender === 2)
// const men = users.filter((user) => user.gender === 1 && user.age > 25 );

// console.log(men)

// const numbers = [1, 3, 5, 7, 9];
// console.log(numbers.find((number) => number > 3));
// console.log(
//     numbers.reduce((oldValue, currentValue) => oldValue + currentValue, 0)
// );

// let users = [
//     { id: 2, name: "Levent", age: 27, gender: 1 },
//     { id: 1, name: "Mehmet", age: 30, gender: 1 },
//     { id: 4, name: "Nazli", age: 45, gender: 1 },
//     { id: 3, name: "Yakup", age: 29, gender: 1 },
// ];
//const currentUser = users.find(user => user.id === 3)
//users.sort((a, b) => b.id - a.id);
//users.sort((a, b) => a.name.localeCompare(b.name));
// users.sort((a, b) => b.name.localeCompare(a.name));
// console.log(users);

//const currentUser = users.findIndex((user) => user.id === 3);
// console.log(currentUser);

// users = users.map((user) => {
//     if (user.id === 2) {
//         user.name = "Ali";
//     }
//     return user;
// });
// console.log(users.some((user) => user.gender === 1));
// const women = users.filter((user) => user.gender === 2);
// const men = users.filter((user) => user.gender === 1 && user.age > 25);
// console.log(men);

// const names = ['Tayfun', 'Merve','Levent', 'Kemal']
// names.sort()
// console.log(names)

//const names = ["Tayfun", "Merve", "Levent", "Kemal"];
//const numaralar = [3, 5, 10, 2.2, 2, 1, 9];
//names.sort();
// numaralar.sort((a,b) => b-a );
// console.log(names);
// console.log(numaralar);


// const names = ["Tayfun", "Merve", "Levent", 'Ali', "Kemal"];
// const numaralar = [3, 5, 10, 2.2, 2, 1, 9];
//names.sort();
//names.sort((a,b) => a.localeCompare(b) );
//  names.sort((a, b) => b.localeCompare(a));
//  console.log(names);
// console.log(numaralar);



// const numbers1 = [12,5,130, 10, 44]
// const result = [numbers1.filter(number => number > 6)]
// console.log(result)


// const name = ['Ahmet', 'Selim', 'Kazim', 'Ali'] 
// console.log(name.filter(name => name.length >= 5))

// const user = [
//     {
//         name: 'Levent',
//         age:27
//     },
//     {
//         name: 'Tahir',
//         age: 30
//     },
//     {
//         name: 'Osman Yahya Kemal',
//         age: '45'
//     }
// ]
// console.log(user.filter((user) => user.age === 27));



// const numbers = [1, 4, 9];

// numbers.forEach((number, index) => {
//     numbers[index] = number * 2;

// });

// const result = numbers.map(function (number) {
//     return number * 2;
//   })

// const result = numbers.map(number => Math.sqrt(number))
// console.log(numbers);
//console.log(result)


// const users =  [
//     {
//         name: 'Levent',
//         surname: 'Yetmez',
//         age: 27
//     },
//     {
//         name: 'Tahir',
//         surname: 'Dolgun',
//         age:45
//     }
// ]
// const date = new Date()
// const result2 = users.map(user => {
//     return {
//         fullName: `${user.name} ${user.surname}`,
//         yearsOfBirth: date.getFullYear() - user.age

//     }
// })

//console.log(users)
//console.log(result2);


// const todos = [
//     {
//         id: 1,
//         name: 'Todo 1',
//         completed: false
//     },
//     {
//         id: 2,
//         name: 'Todo 2',
//         completed: false
//     }
// ]

// console.log(todos.map(todo => {
//     if (todo.id === 1){
//  todo.completed = true;
//     };
//     return todo;
// }))

// inculude codu

const numbers = [1, 2, 3, ,4]
console.log(numbers.includes(5))

// const name = ['Levent', 'Gokhan', 'Selvi']
// console.log(name.includes('Levent'))

const name = ['levent', 'Tahir', 'Selvi'];
console.log(name[0].includes('le'));