import "./bootstrap";

// javascript json kullanimi

// ornek bir code
// let u = {
//     "users": [
//         {
//             'firtName': "Levent",
//             'lastName': "Dolgun",
//             'age': 27,
//             'email': "test@gmail.com",
//         },
//         {
//             "firtName": "Ismail",
//             "lastName": "Dolmaci",
//             "age": 30,
//             "email": "test1@gmail.com",
//         },
//     ],
// };

// [
//     {
//         "name": "Levent",
//         "surname": "Dolgun",
//         "skills": [
//             {

//             },
//             {

//             },
//         ]
//     },
//     {
//         "name": "Tayfun",
//         "surname": "Erbilen",
//     },
//     {
//         "name": "Tayyar",
//         "surname": "Erbilen",
//     },
//     {
//         "name": "Selim",
//         "surname": "Erdogan",

//     }
// ];

// let sampleJSON = `[
//     {
//         "name" : "Tayfun",
//         "surname" : "Erbilen"
//     },
//     {
//         "name" : "Levent",
//         "surname" : "Dolgun"
//     },
//     {
//         "name" : "Tahir",
//         "surname" : "Dogan"
//     }
// ]`;

// try {

//     let users = JSON.parse(sampleJSON)
//     console.log(users)
//     } catch (err) {
//         console.log(err.message)
// }

let categoies = [
    {
        name: "Javascript",
        count: 5,
    },
    {
        name: "css",
        count: 16,
    },
];
//let categoiesJSON = JSON.stringify(categoies, undefined, 10);
let categoiesJSON = JSON.stringify(categoies, ['count', 'name'], 4);
console.log(categoiesJSON);

// not : json dan objecte gecirirken parse ediyoruz objeden jsona gicirirken stringify ediyoruz buraya dikkat.



// let sampleJSON = `[
//     {
//         "name" : "Tayfun",
//         "surname" : "Erbilen"
//     },
//     {
//         "name" : "Levent",
//         "surname" : "Dolgun"
//     },
//     {
//         "name" : "Tahir",
//         "surname" : "Dogan"
//     }
// ]`;

// try {

//     let users = JSON.parse(sampleJSON, (key, value) => {
//         console.log('KEY', key)
//         console.log("VALUE", value);
//     } )
//     console.log(users)
//     } catch (err) {
//         console.log(err.message)
// }