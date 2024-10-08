import './bootstrap';

// DOM - 3 
// DOM = Document Object Model Day3
// Event Listeners (olaylar)

//events:onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload, (onerror)

// farkli html elemanlarini dinlemek icinde addEventListener() diye method tanimliyoruz
// (e) pointerEvent dikkat et !

// by now you are familiar with addEventListen method.

// click - when the element clicked
// dblclick -   when the element double clicked
// mouseenter - when the mouse point enter to the element
// mouseleave - when the mouse pointer leave the element
// mousemove -  when the mouse pointer move on the element
// mouseover -  when the mouse pointer move on the element
// mouseout  -  when the mouse pointer out from the element
// input     -  when value enter to input field
// change    -  when value change on input field
// blur      -  when the element is not focused
// keydown   -  when a key is down
// keyup     -  when a key is up   
// keypress  -  when we press any key
// onload    -  when the browser has finished loading a page


//const button = document.getElementById('btn');

// 1. yol onemli
//button.addEventListener('event', function(e){ })

//2. yol onemli
//button.addEventListener("event", e => {});



// const button = document.getElementById('btn')
// button.addEventListener('click', function(e){
//     //console.log('Butona tikladin !')
//     console.log(e);
// })


// const button = document.getElementById('btn')
// button.onclick = e => {
//     console.log(e)
// }

// double click cift tiklama 
// const button = document.getElementById("btn");
//  button.addEventListener('dblclick', function(e){
//      console.log(e);
//  })

// botun uzerine geldiginde calisir, mouse button veya bir nesne uzerinde calisir.
// const button = document.getElementById("btn");
// button.addEventListener("mouseenter", function (e) {
//     console.log(e);
// });


// mouse button uzerinde gezdirilince calisir.
// const button = document.getElementById("btn");
// button.addEventListener("mousemove", function (e) {
//     console.log(e);
// });


const img = document.querySelector('img')
img.style.opacity = 0
img.addEventListener('load', function(){
    console.log('gorsel yuklendi')
    img.style.opacity = 1
})

img.addEventListener('error', function(e){
    //console.log('Resim yuklenirken bir hata olustu', e)
    e.target.src = './no-image.jpg'
})

// const input = document.getElementById('name')
// input.addEventListener('input', e => {
//     console.log('bir seyler yaziliyor...', e.target.value)
// })

// const input = document.getElementById("name");
// input.addEventListener("change", (e) => {
//     console.log("bir seyler yaziliyor...", e.target.value);
// });

// const input = document.getElementById("name");
// input.addEventListener("keyup", (e) => {
//     console.log("bir seyler yaziliyor...", e.target.value);
// });

// const input = document.getElementById("name");
// input.addEventListener("keydown", (e) => {
//     console.log("bir seyler yaziliyor...", e.target.value);
// });

// const input = document.getElementById("name");
// input.addEventListener("keypress", (e) => {
//     console.log("bir seyler yaziliyor...", e.target.value);
// });

// const colorInput = document.getElementById("color-picker");
// colorInput.addEventListener("input", (e) => {
//     console.log(e.target.value);
// });

const input = document.getElementById("name");
input.addEventListener("input", (e) => { 
    if (e.target.value){
        e.target.classList.remove('error')
    }
    console.log("bir seyler yaziliyor...", e.target.value);
});

input.addEventListener('blur', e => {
    if(e.target.value === ''){
        e.target.classList.add('error')
    }
    // console.log('odak kayboldu')
})


const colorInput = document.getElementById('color-picker')
colorInput.addEventListener('input', e => {
    document.body.style.backgroundColor = e.target.value
})


const genderSelect = document.getElementById("gender");
genderSelect.addEventListener("change", (e) => {
    console.log(
        [...e.target.selectedOptions].map((el) => el.value))
});

const saveRulesCheckbox = document.getElementById('save-rules')

console.log(document.querySelector('input[name=stack]').checked)

const form = document.getElementById('form')

const saveButton = document.getElementById('save-btn');
saveButton.addEventListener('click', e => {
    console.log(
        input.value,
        colorInput.value,
        saveRulesCheckbox.checked,
        form.elements.stack.value
    )
})

document.body.addEventListener('keydown', e => {
    console.log(e.key);
    // console.log(e.code ,e.key)
})

