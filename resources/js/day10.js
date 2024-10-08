import "./bootstrap";

// Set and Map

// Set == bos bir kume
// Map = {set, get ,has, delete,clear, size} methodlarini kullanmaya izin verir

// set'in Arrayden en buyuk farki = her bir eleman benzersiz olmak zorunda
// Map'in objectten en buyuk farki  = objectte keyleri (anahtralari string ve sembol
// olusturabilirken - Map ile keyleri anahtarlari istedigimiz veri turuyle olusturabiliriz
// number string  boolen objecttin kendisi dahi olabilir).
// diger bir kaynak Javascript info web sitesi ( https://javascript.info/ )

// Set Kullanimi ***
//const names = new Set(['Ahmet', 'Mehmet', 'Kemal'] );

// 1. yol
//names.forEach(name => console.log(name))
//[...names].map(name => console.log(name)); // Map kullanamiyoruz

// 2. yol
// for (let name of names){
//     console.log('Ad', name);
// }

// const names = new Set()
// names.add('Levent')
// names.add('Kemal')
// names.add('Mehmet')
// console.log(names)

// const names = ['Levent', 'Kemal', 'Osman']
// const nameSet = new Set()
// for (let name of names){
//     nameSet.add(name)
// }
// console.log(nameSet.has("Kemal"));
// nameSet.delete('Kemal')
// nameSet.clear()
// console.log(nameSet.has('Levent'))

//const names = ['Levent', 'hakan', 'Tayfun', 'Selim', 'Tayfun', 'Mehmet', 'Selim', 'Levent']
//console.log(new Set(names))
//console.log([...new Set(names)]);

// const languages = [
//     'English',
//     'German',
//     'Turkey',
//     'French',
//     'English',
//     'Turkey',
//     'Spanish',
//     'French',
//     'English',
//     'Turkey'
// ]
// const langSet = new Set(languages)
// console.log(langSet)
// console.log(langSet.size)
// const counts =[ ]
// for (let l of langSet){
//     const filteredLang = languages.filter(lng => lng === l)
//     console.log(filteredLang)
//     counts.push({
//         language: l,
//         counts: filteredLang.length
//     })
// }
// console.log(counts)

// 1. yol
// let a = [1,2,3,4,5]
// let b = [3,4,5,6,]
// let c = [...a, ...b]

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)
// console.log(C)

// 2. yol
// let a = [1,2,3,4]
// let b = [3,4,5,6]
// const c = [...a, ...b]
// console.log(c)

// 1. yol

// let a = [1,2,3,4,5,6]
// let b = [3,4,5,6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => B.has(num))
// let C = new Set(c)
// console.log(C)

// 2 .yol
// const a = [1,2,3,4,5,6]
// const b = [2,3,4,5,6]
// const B = new Set(b)
// console.log(a.filter((num) => B.has(num)));

// const a = [1, 2, 3, 4, 5];
// const b = [3, 4, 5,6];

// let A = new Set(a)
// let B = new Set(b)
// console.log(a.filter(num => !B.has(num)));
//console.log( b.filter(num => !A.has(num)));

// Map Kullanimi ***
// const map = new Map()
// map.set('name', 'Tayfun')
// map.set(1, 'ahmet');
// console.log(map)

// 1. yol
// const obj = {};
// obj["name"] = 'Tayfun'
// obj[1] = 'Ahmet'
// obj[true] = 'Hello'
// console.log(
//     Object.keys(obj)
// )
// console.log(obj[true]);
// console.log(obj);

// 2. yol

// const map = new Map()

// map.set('1', 'str')
// map.set(1, 'num1')
// map.set(true, 'bloo1')
// map.set(false, "bloo2");
// map.set('2', "bloo3");

// console.log(
//     map.size,
//     map.get('1')
// )

// onemli yapi ***
// map.key()
// map.values()
// map.entries()

// const tayfun = [
//     {
//         name: "Levent",
//     },
// ];
// const ahmet = [
//     {
//         name: "Selim",
//     },
// ];
// const map = new Map();
// //map.set(tayfun, 10)
// //map.set(ahmet, 20);
// map.set(tayfun, 10)
//    .set(ahmet, 20);

// console.log(
//     map.keys(),
//     map.values(),
//     map.entries()
// );

// const tayfun = [
//     {
//         name: "Tayfun",
//         surname: "Erbilen",
//     },
// ];
// const ahmet = [
//     {
//         name: "Selim",
//     },
// ];

//const map = new Map();

// console.log(
//     Object.entries(tayfun),
// )

// const map = new Map([
//     ["name", "Levent"],
//     ["surname", "Erbilen"],
// ]);

// const map = new Map(Object.entries(tayfun))

// console.log(
//     Object.fromEntries(map.entries())
// )
//console.log(map.get('name'))
//console.log(map);



//map.set(tayfun, 10)
//map.set(ahmet, 20);
//map.set(tayfun, 10).set(ahmet, 20);

// console.log(
//     map.keys(),
//     map.values(),
//     map.entries()
// );

// for (let u of map.keys()){
//     console.log(u)
// }

// for (let u of map.values()) {
//     console.log(u);
// }

//tayfun.surname = "Erbilen";

// 1. yol
// [...map.keys()].forEach(v => console.log(v)),
// [...map.values()].forEach(v => console.log(v)),
// [...map.entries()].forEach(v => console.log(v))

// 2. yol
//[...map].forEach(([key, val]) => console.log(val))

// for (let u of map.entries()) {
//     console.log(u);
// }
