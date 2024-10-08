import "./bootstrap";

// const numbers = [1, 2, 3,  5,]
// let total = 5
// numbers.forEach(number => total += number)
// console.log(total)

// 1. yol

// const numbers = [1, 2, 3, 5];

// let total = 0;
// numbers.forEach((number) => (total += number));
// console.log(total);
// let total2 = numbers.reduce(function (acc, number) {
//     return acc + number
// },5)

// console.log(total2)

// 2. yol

// const numbers = [1, 2, 3, 5];

// let total = 0;
// numbers.forEach((number) => (total += number));
// console.log(total);
// let total2 = numbers.reduce((acc, number) => acc + number, 5);
// console.log(total2);

const basket = [
    {
        name: "iphone",
        price: 7000,
    },
    {
        name: "App Macbook Pro",
        price: 14000,
    },
    {
        name: "Harman/kardon",
        price: 2500,
    },
];

// let sum = basket.reduce((acc, item) => acc + item.price, 0)
// console.log(sum)

// const names = ['Levent', 'Mehmet', 'Yakup', 'Sezar', 'Levent' , 'Yakup']

// let countedNames = names.reduce((allName, name) => {
//     if (name in allName) {
//         allName[name]++
//     }else{
//         allName[name] = 1
//     }
//     return allName
// }, {})

// console.log(countedNames);

const products = [
    {
        name: "NT1-a Conderser Mokrofon",
        brand: "Rode",
    },
    {
        name: "Iphone xs",
        brand: "Apple",
    },
    {
        name: "SmartLav Plus + Yaka mikrofon",
        brand: "Rode",
    },
    {
        name: "Macbool Pro",
        brand: "Apple",
    },
    {
        name: "M-AUDIO Keystation 61",
        brand: "M-Audio",
    },
];

const groupBy = (array, property) => {
        return array.reduce((acc, product) => {
            let key = product[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(product);
            return acc;
        }, []);
};

console.log(groupBy(products, 'brand'));

// let group = 'brand'
// let groupedProducts =  products.reduce((acc, product) =>{
//     let key = product[group]
//     if(!acc[key]){
//         acc[key] = []
//     }
//     acc[key].push(product)
//     return acc
// }, [])

// console.log(groupedProducts);






const posts = [
    {
        title: 'Post 1',
        tags: ['php', 'Css']
    },
    {
        title: 'Post 2',
        tags: ['javascript', 'html5']
    },
    {
        title: 'Post 3',
        tags: ['html5', 'json']
    }
]

const allTags = posts.reduce((acc, post) => [...acc , ...post.tags], [])
//console.log(allTags)

// const array2 = ['a', 'b', 'b', 'c', 'a', 'd', 'd', 'e' ]

// const result = allTags.reduce((acc, item) => {
//     if (!acc.includes(item)) {
//         acc.push(item);
//     }
//     return acc;
// }, []);
//console.log(result)
console.log([...new Set(allTags)])

const numbers2 = [-5, 6, 2, 0]

// console.log(
//     numbers2.filter(number => number > 0 ).map(number => number * 2 )
// )
console.log(
    numbers2.reduce((acc, number) => {
        if (number > 0) {
            acc.push(number * 2);
        }
        return acc;
    }, [])
);











