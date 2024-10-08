import './bootstrap';

// DOM - 1 html html kodlariyla javascript eleman kodlarina erisim ve mudehale etmemizi sagliyor 
// DOM = Document Object Model Day1

//const h1 = document.getElementsByTagName('h1');
 
// console.log(
//     h1[0]
// )
 
// let len = h1.length
// for (let i = 0; i < len; i++ ){
//     console.log(
//         h1[i]
//     )
// }

// [...h1].forEach( item => {
//     console.log(item)
// })



// console.log(
//     h1.length
// )

// console.log(h1)


// const h1 = document.getElementsByClassName('title-1')
// const title = document.getElementById('title')
// console.log(title)




console.log(
    document.querySelector('.title-1 + #title')
);

title.setAttribute('style', 'color:blue; background-color:yellow;')
title.setAttribute('title', 'test baslik')
//title.setAttribute('class', 'adana')

// title.style.color = 'blue'
// title.style.backgroundColor = 'green'
title.title = 'Test Baslik'
//title.className = 'adana'

// title.classList.add('adana')
// title.classList.remove('test1')

//title.classList.toggle('test1')
//title.textContent = 'yeni deger'
// title.innerHTML = "yeni deger <u>test</u>";
//title.innerHTML = "";


// const names = ['a', 'b', 'c']
// names.length = 0
// console.log(names)

// console.log(
//     document.querySelectorAll('.title-1').length
// );


// document.querySelectorAll(".title-1").forEach (item => console.log(item))

document.querySelectorAll('h1').forEach ((h1, index) => {
    if (index % 2 === 0){
        h1.style.color = 'green',
        h1.style.fontSize = '25px'
    }else{
        h1.style.color = 'orange'
    }
} )












