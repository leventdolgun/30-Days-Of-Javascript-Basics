import './bootstrap';

// 1. yol
// const button = document.getElementsByTagName("button");
// 2.yol
// const button = document.querySelectorAll("button");
// 3.yol
// const button = document.querySelector('button')

// console.log(  
//     button
// )


// click = tiklama
// dblclick = cift tiklama
// focus = odaklanma
// blur = odagi kaybetme

// 2 yoluda kullanabilirsin
// 1.yol
//const button = document.querySelector("#btn");
// 2.yol
// const button = document.getElementById("#btn");
// const content = document.getElementById('content')

// console.log(
//     button,
//     content 
// )


// const  a =4 
// if (a === 4){
//     console.log('a degeri calisti')
// }else if (a === 5) {
//     console.log('a 5e denk')
// }else{

// }

// 1.yol
// const buttons = document.getElementsByClassName('.btn')

// 2.yol
// const buttons = document.querySelector('.btn')

//3.yol
const buttons = document.querySelectorAll('.btn')
//console.log(buttons)
// 1.yol
// buttons.forEach( function(button){
// console.log('button', button)
// })

// 2.yol

buttons.forEach(button => {
    //const button = document.getElementById('btn')
    // const content = document.getElementById('content')

    //const content = button.dataset.target;
    const content = document.querySelector(button.dataset.target);
    button.innerText = button.dataset.hide;

    //console.log('content', content)

    button.addEventListener("click", () => {
        // console.log(content.style.display)
        //console.log(
        // button.getAttribute('data-show')
        // button.dataset.show
        //)
        if (content.style.display === "" || content.style.display === "block") {
            //console.log('content sayfada gorunur')
            content.style.display = "none";

            // butonun text'ini goster olarak ayarlamam gerekiyor!
            //button.innerHTML = "goster";
            button.innerHTML = button.dataset.show;
            //console.log(button.innerHTML)
        } else {
            //console.log('content sayfada gizli')
            //content.style.display = "block";
            content.style.display = "";
            //button.innerHTML = "gizle";
            button.innerHTML = button.dataset.hide;
        }

        // console.log(
        //     content.style.display
        // )
        //console.log('Sen Butona Tikladin Dikkat et!')
    });
})

//const button = document.getElementById('btn')
// const content = document.getElementById('content')

//const content = button.dataset.target;
const content = document.querySelector(button.dataset.target);
button.innerText = button.dataset.hide

//console.log('content', content)

button.addEventListener('click', () => {
    // console.log(content.style.display)
    //console.log(
        // button.getAttribute('data-show')
       // button.dataset.show
    //)
    if (
        content.style.display ===  "" ||
        content.style.display ===  "block"
    ) { 
        //console.log('content sayfada gorunur')
        content.style.display = "none"

        // butonun text'ini goster olarak ayarlamam gerekiyor! 
        //button.innerHTML = "goster";
        button.innerHTML = button.dataset.show
        //console.log(button.innerHTML)
    }else{
        //console.log('content sayfada gizli')
        //content.style.display = "block";
        content.style.display = ""
        //button.innerHTML = "gizle";
        button.innerHTML = button.dataset.hide
    }

    // console.log(
    //     content.style.display
    // )
    //console.log('Sen Butona Tikladin Dikkat et!')
})

// her iki yolda olur hangisini kullanmak istersen onu kullani 
// 1. yol 
//button.addEventListener('click', function ( ) {  })
// 2.yol
//button.addEventListener('click', () => {})








// 27. dersin eksra eklenen kisa projesi devami farkli bir islem yok
// const buttons = document.querySelectorAll(".btn");
// buttons.forEach((button) => {
//     const content = document.querySelector(button.dataset.target);
//     button.innerText = button.dataset.hide;
//     button.addEventListener("click", () => {
        
//         if (content.classList.contains("hide")) {
//             button.innerHTML = button.dataset.hide;
//             //content.classList.add('show')
//             content.classList.remove("hide");

//            // content.classList.remove()
//         }else{
//             button.innerHTML = button.dataset.show;
//             content.classList.add('hide')
//             //console.log('Gizlememiz lazim !')
//         }

//         // if (content.style.display === "" || content.style.display === "block") {
//         //     //console.log('content sayfada gorunur')
//         //     content.style.display = "none";
//         //     button.innerHTML = button.dataset.show;
//         // } else {
//         //     content.style.display = "";

//         //     button.innerHTML = button.dataset.hide;
//         // }
//     });
// });





















