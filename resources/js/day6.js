import './bootstrap';


for (let i = 1; i<=5; i++){
    // console.log('i' , i)
    console.log(`${i} * ${i} = ${i * i}`)
    
}


const names  = ['Mehmet', 'Ali', 'Murat', 'Gokhan', 'Veli', 'Oguzhan', 'Suleyman', 'levent', 'kazim']

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


let numbers = [5, 10, 15]
let sum = 0

for (let i = 1; i < numbers.length; i++ ){
    sum += numbers[i]
}
console.log('Toplam', sum )



let countries       = ['Turkey', 'cyprus', 'azerbaijan']
let newCountries    = []

for ( let i = 0; i<countries.length; i++ ){
    newCountries.push(countries[i].toLocaleUpperCase('TR'))
}
console.log(countries)
console.log(newCountries)

let i = 1 
while (i < names.length){
    console.log('Isim', names[i])
    i++
}

do {
    
    console.log('Isim', names[i])
    i++
}while (i < names.length)

// for (let name of names ){
//     if (name === 'Gokhan'){
//         console.log(`${name} bulundu.`)
//         break
//     }
//     console.log('Ad', name )
// }


for (let name of names) {
    if (name === "Gokhan") {
        console.log(`${name} es Gecildi.`);
       continue
    }
    if (name === "Oguzhan") {
        console.log(`${name} es Gecildi.`);
       break
    }
    console.log("Ad", name);
}