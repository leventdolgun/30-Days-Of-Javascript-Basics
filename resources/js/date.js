import './bootstrap';



const date = new Date()

let years       = date.getFullYear(),
    month       = date.getMonth(),
    day         = date.getDate(),
    hour        = date.getHours(),
    minute      = date.getMinutes(),
    second      = date.getSeconds(),
    dayNumber   = date.getDay()

let months = [
    'Ocak',
    'Subat',
    'Mart',
    'Nisan',
    'Mayis',
    'Haziran',
    'Temmuz',
    'Agustos',
    'Eylul',
    'Ekim',
    'Kasim',
    'Aralik',
]

let days = [
    'Pazar',
    'Pazartesi',
    'Sali',
    'Carsamba',
    'Persembe',
    'Cuma',
    'Cumartesi',
]


let humanReadableDate = `${day} ${months[month]} ${years} , ${days[dayNumber]}, ${hour}:${minute}:${second}`;
console.log(humanReadableDate)
// console.log( mounts[0])
// console.log( days[4] )
// console.log(date.getFullYear())



// let date = new Date();

// console.log("Tarih Bilgisi = ", date.toLocaleString());
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log("Tarih Bilgisi = ", date.getUTCMonth());