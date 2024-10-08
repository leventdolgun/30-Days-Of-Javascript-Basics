import "./bootstrap";

// Destructuring => Seklini bozma
// Spread, Rest => Dagilma, yayma
// Rest => Kalan

//const numbers = [10,12,14]
//1.yol
//const [numbers1,numbers3 ,numbers2 ] = numbers
// 2.yol
//const [ ,, numbers3 ] = numbers
//console.log(numbers3)

//console.log(numbers[0]); //10
//console.log(numbers1); //10
//console.log(numbers[1]); // 12
//console.log(numbers2); // 12
//console.log(numbers[2]);

// const stack = [
//     ['Html', 'Css', ['javascirpt', 'React', 'Svelte']],
//     ['Php', 'Mysql', 'NodeJs']
// ]
// const [[firstTech], backend] = stack
//const [[firstLanguage, secondLanguage, [firstThirdLanguage]], backend] = stack
//console.log(firstThirdLanguage);
//console.log(secondLanguage);
//console.log(firstTech);

// const numbers = [10, 12, 14];
// const [ , , numbers3] = numbers;
// console.log(numbers3);

// const numbers = [10 , undefined  , 14];
// const [ ,numbers2 = 1 , numbers3] = numbers;
// console.log(numbers2);

// const names = ['tayfun', 'zerafet', 'Hakan', 'Mehmet', 'gokhan', 'Selim']
// const [myName, myWifeName, myFriendName, ...otherName ] = names
// console.log(myName)
// console.log(myWifeName);
// console.log(myFriendName);
// console.log(otherName);

// 1. yol
// const countries = [['Finland', 'Helsinki'],
//                   ['Sweden','Stockholm'],
//                   ['Norway', 'Oslo'],
//                   ['Turkey', 'Ankkara']
//                 ]
//console.log(countries)
// for (const country of countries){
//    console.log(country)
//    console.log(`Ulke: ${country[0]} - Baskent: ${country[1]}`)
// }

// 2. yol
// const countries = [['Finland', 'Helsinki'],
//                    ['Sweden','Stockholm'],
//                    ['Norway', 'Oslo'],
//                    ['Turkey', 'Ankkara']
//                  ]
// console.log(countries)
//  for (const [country, capital] of countries){
//     console.log(`Ulke: ${country} - Baskent: ${capital}`)
//  }

// const user = {
//     name: 'Tayfun',
//     surmame: 'Erbilen',
//     adana: 'guzel Bir ildir',
//     age: 30,
//     perts: {
//         cat:['asil'],
//         dog:['Monti']
//     }
// }
// const  {surmame:soyad, adana = 'Adana' } = user
// console.log(adana)

// function multiply(num1, numb2) {
//     return num1 * numb2
// }
// console.log(
//     multiply(10,10 )
// )

// function multiply(numbers) {
//     return numbers[0] * numbers[1];
// }
// const numbers = [10, 10]
// console.log(multiply(numbers));

// function multiply([number1, number2]) {
//     return number1 * number2;
// }
// const numbers = [10, 10];
// console.log(multiply(numbers));

// const user = {
//     name: "Tayfun",
//     surname: "Erbilen",
//     adana: "guzel Bir ildir",
//     age: 30,
//     pets: {
//         cats: ["asil"],
//         dogs: ["Monti"],
//     },
// };

// 1. yol 
// function showUserInfo(user) {
//         return `Merhaba, ben  ${user.name} ${user.surmame}, ${
//             user.age
//         } yasindayim. Ve ${(user.pets.cat.length)} kedim ve ${user.pets.dog } kopegim var`;
//  }
//  console.log(
//     showUserInfo(user)
//  )

// 2. yol

// const {pets: {cats: Kediler, dogs: Kopekler}} = user
// console.log(Kopekler) 
// function showUserInfo({name, surname, age, pets}) {
//     return `Merhaba, ben  ${name} ${surname} ${age} yasindayim. Ve ${pets.cats.length} kedim ve ${pets.dogs} kopegim var`;
// }
// console.log(showUserInfo(user));


// 3. yol


// const user = {
//     name: "Tayfun",
//     surname: "Erbilen",
//     age: 30,
//     pets: {
//         cats: ["asil"],
//         dogs: ["Monti"],
//     },
//     skills: ['Php', 'Css', 'Javascript'],
//     hobbies: ['bicyle', 'reading']
// };


// const {
//     pets: { cats: Kediler, dogs: Kopekler },
// } = user;
// console.log(Kopekler);
// function showUserInfo({ name, surname, age, pets:{dogs,cats}, skills:[skill1, ...orderSkills], ...others }) {
//     console.log("OTHERS", skill1);
//     console.log(orderSkills);
//     return `Merhaba, ben  ${name} ${surname} ${age} yasindayim. Ve ${cats.length} kedim ve ${dogs.length} kopegim var`;
// }
// console.log(showUserInfo(user));



// const numbers =  [1, 3, 5]
// const numbers2 = [...numbers]

// console.log(numbers)
// numbers2.push(10)
// console.log(numbers);
// console.log(numbers2)

// 1.yol
// const user = {
//     name: 'Tayfun',
//     surname: 'Erbilen',
// }
// const user2 = user 
// user2.name = 'Zerafet'
// console.log(user)

// 2.yol
// const user = {
//     name: "Tayfun",
//     surname: "Erbilen",
// };
// const user2 = {...user}
// user2.name = "Zerafet";
// console.log(user);
// console.log(user2);



// 3. yol

// const user = {
//     name: "Tayfun",
//     surname: "Erbilen",
// };
// const user2 = { 
//     ...user,
//     name: 'Zerafet',
//     surname: 'Bilgec'
// };
// console.log(user);
// console.log(user2);



const numbers = [1,3,5]
console.log(
    [0,...numbers,6,7]
)










