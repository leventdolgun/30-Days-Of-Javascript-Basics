import './bootstrap';

// Console Metodları
// console.log('Ben %d yasindayim %d yilinda dogdum', 30, 1990 )
// console.log(30)
// console.log('there on the Javascript today console.log see')
// console.log(['Levent', 'Mustafa','Kemal', 'Selim'])
// console.log({
//     name: 'Levent',
//     surname: 'Dolgun'
// })

// console.log('%cDur %cNaber', 'font-size:50px; font-family:arial;color:red; text-shadow:0 0 10px rgba(255,255,255, .4)', 'color:yellow' )


console.warn('uyari Mesaji')
console.error('sen ne yaptin gardas ?')

let names = ['Tayfun', 'Kemal', 'Hakan', 'Selim']

//console.table(names)

console.table({
    name: 'tayfun',
    surname: 'erbilen'
})


// console.time('calcute 1m array');
// new Array(10).fill().map((value, index) => index);
// console.timeEnd('calcute 1m array')


// console.time("calcute 1m array");
// new Array(10e5).fill('abc').map((value, index) => index);
// console.timeEnd("calcute 1m array");

// let a = 5
// let b = 6
// console.assert( a > b ,'A buyuk degil!' )


const countries =[
    ['Finland', 'Helsinki'],
    ['Sweden','Stocholm'],
    ['Norway','Oslo'],
]
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250,
}
const users = [
    {
        name: "Asabeneh",
        title: "Programmer",
        country: "Finland",
        city: "Helsinki",
        age: 250,
    },
    {
        name: "Asab",
        title: "Intructor",
        country: "Norway",
        city: "Oslo",
        age: 25,
    },
    {
        name: "Matias",
        title: "Developer",
        country: "Denmark",
        city: "Copenhagen",
        age: 28,
    },
];

console.group('Names')
console.log(names)
console.log('Bu mesaj bu gruba ait')
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users);
console.groupEnd()




const test = () => {
    console.count('test called ')
}

test()
test()
test()

//console.clear()

















































