import "./bootstrap";

// Element Obje ( )
// attributes (ozelligi elemana ait olan nitelikleri dondurur. "NamedNodeMap" objesidir.) donen degerler tarayicidan tarayiciya gore farklilik gosterebilir.

// const h1 = document.querySelector('h1');

// for( const attr of h1.attributes){
//     console.log(attr.name, attr.value)
// }

// console.log(
//     h1.attributes.style.value
// );

// onemli elemanlar
// nextElementSibling = secilen elemanin hemen sonrasinda gelen elemani dondurur.
// previusElementSibling = secilen elemanin hemen oncesinde gelen elemani dondurur.

// scrollHeight = elemanin tasan alanlari dahil olmak uzere yuksekligini dondurur.
// scrollWidth  = elemanin tasan alanlarida dahil olmak uzere genisligini dondurur.

// scrollLeft  = Scrol olan elemanin soldan mesafesini dondurur. Ayrica soldan mesafesini ayarlamak icinde ayni ozellik kullanilir.
// scrollTop   = scrol olan elemanin yukaridan mesafesini dondurur. Ayrica Yukaridan Mesafesini ayarlamak icinde ayni ozellik kullanilir.
//tagName      = secilen ogenin etiket ismini dondurur. 

// after() - before() = secilen elemanin oncesine ve sonrasina oge eklemek icin kullanilir.
// append() - prepend() = secilen elemanin basina ve sonuna oge eklemek icin kullanilir ('after-before') dan farkli olarak bu iki method ile secilen ogenin icinde oncesine ve sonrasina ogeler ekler.

// closest()   = Secilen elemana en yakin belirtilen ogeyi dondurur.
// getBoundClientRect() = secilen ogenin boyutlarini ve posizyon bilgilerini DOMRect objesi olarak dondurur.
// hasAttrubute()   = secilen elemana ait belirlenen niteligin olup olmadigini kontrol eder.
// hasAttrubutes()  = secilen elemana ait herhangi bir nitelik olup olmadigini kontrol eder.
// matche()   =  secilen elemanin css secicisiyle eslesip eslesmedigini kontrol eder.
// toggleAttribute = secilen elemana belirtilen nitelik varsa kaldirilmasini yoksa eklemesini saglar. 



// 1.yol
const ul = document.querySelector("ul");
//const deleteButtons = document.querySelectorAll('.delete-btn')

//const deleteButtons = ul.children;
// console.log(deleteButtons);

// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// [...deleteButtons].forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         e.target.remove();
//         //console.log(ul.childElementCount)
//         if (ul.childElementCount === 0) {
//             //ul.remove()
//             ul.innerHTML = "Gosterilecek Veri bulunamadi !";
//         }
//     });
// });
// console.log(ul.childElementCount);

// deleteButtons.forEach(btn =>{
//     btn.addEventListener('click', e => {
//         e.target.remove()
//         //console.log(ul.childElementCount)
//         if (ul.childElementCount === 0){
//             //ul.remove()
//             ul.innerHTML = 'Gosterilecek Veri bulunamadi !'
//         }

//     })
// })
// console.log(
//     ul.childElementCount
// )


const deleteButtons = document.querySelectorAll(".delete-btn");

//const deleteButtons = ul.children;
// console.log(deleteButtons);

console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.target.closest("li").remove();
        //console.log(ul.childElementCount)
        if (ul.childElementCount === 0) {
            //ul.remove()
            ul.innerHTML = "Gosterilecek Veri bulunamadi !";
        }
    });
});
console.log(ul.childElementCount);


const test = document.querySelector(".test");
console.log(test.clientWidth);

const title = document.querySelector(".title");
console.log(title.previousElementSibling);
console.log(title.nextElementSibling.nextElementSibling);

const scrollContent = document.querySelector(".scroll-content");
const scrollDownBtn = document.getElementById("scroll-down");

console.log(scrollContent.scrollHeight);
scrollDownBtn.addEventListener("click", () => {
    scrollContent.scrollTop += 50;
    //console.log(scrollContent.scrollTop)
});

const scrollContent2 = document.querySelector(".scroll-content2");

const scrollRigthBtn = document.getElementById("scroll-right");
const scrollLeftBtn = document.getElementById("scroll-left");

 if (scrollContent2.scrollLeft === 0) {
     scrollLeftBtn.setAttribute("disabled", "disabled");
 } else {
     scrollLeftBtn.removeAttribute("disabled");
 }

console.log(scrollContent2.scrollWidth, scrollContent2.clientWidth);


console.log(scrollContent.scrollHeight);
scrollRigthBtn.addEventListener("click", e => {
    scrollContent2.scrollLeft += 50;
    console.log(e.target.tagName)
    //console.log(scrollContent.scrollTop)
});
scrollLeftBtn.addEventListener("click", () => {
    scrollContent2.scrollLeft -= 50;
    //console.log(scrollContent.scrollTop)
});

scrollContent2.addEventListener("scroll", (e) => {
    if (
        scrollContent2.scrollWidth - scrollContent2.clientWidth ===
        e.target.scrollLeft
    ) {
        scrollRigthBtn.setAttribute("disabled", "disabled");
    } else {
        scrollRigthBtn.removeAttribute("disabled");
    }
    if (e.target.scrollLeft === 0) {
        scrollLeftBtn.setAttribute("disabled", "disabled");
    } else {
        scrollLeftBtn.removeAttribute("disabled");
    }
    //console.log("scroll Oldu!", e.target.scrollLeft);
});

const adana = document.getElementById('adana')

const h1 = document.createElement('h1')
h1.textContent = 'baslik'

const p = document.createElement('p');
p.textContent = 'paragraf'

 adana.append(h1, p, 'ADANALIYIK')

// adana.prepend(h1, p);
// adana.append(h1, p);
// adana.before(h1, p)
// adana.after(h1, p)
//adana.after(h1)
console.log(
    adana.getBoundingClientRect()
)


const aElements = document.querySelectorAll('a')
aElements.forEach(a => {
    if(a.hasAttribute('title')){
        a.style.backgroundColor = 'yellow'
    }
})

const buttons = document.querySelectorAll('button')
for( const button of buttons){
    if(button.matches('button[type=submit][disabled]')){
        button.style.fontSize = '100px'
        //console.log(button)
    }
}


// const button = document.querySelector('button')
// const input = document.querySelector('input')

// button.addEventListener('click', () => {
//     input.toggleAttribute('disabled')
// } )