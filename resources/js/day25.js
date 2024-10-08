import { preview } from 'vite';
import './bootstrap';


// preventDefault = bazi etiketlerin varsayilan davranislari vardir. 
//                  ornegin a etiketine basinsa ilgili linke yonlendirilirsin yada form icinde tipi submit olan bir 
//                  buttona basinca formu gonderir vs.bu gibi varsayilan davranislari engellemek icin preventDefault kullanilir.

// stopPropagation  = varsayilan yayilmayi engellemek icinse bu ozellik kullanilir. ornekle aciklamak gerekirse ic ice 
//                    3 tane etiketimiz oldugunu dusunelim ve bu 3 etiketin bu  click olayi olsun.


// CSSSTYLEDECLERATION  ==>

    // setProperty()      = Belirtilen css ozelligi tanimlammizi saglar 3. parametre olarak ` important ` olup olmadigini belirtebiliriz.
    // removeProperty()   = Secilen css ozelligi kaldirir.
    // getPropertyValue() = Secilen Css ozelliginin degerini dondurur.
    // getPropertyPriority() = Secilen css ozelligin important olup olmadigini dondurur. Cok onemli bir method degil 

// MediaQueryList  = Responsive tasarim yaparken kullandigimiz sorgulardir.
    // window.mactMedia() =  Bir medya sorgusu yazmamizi saglar ornegin sayfa genisligi 480px altinda mi degil mi kontrol edelim 

// designMode = Bir belgenin tasarim modunda olup olmadigini belirlememizi saglar.
// selectionStart ve selectionEnd = kullanicidan bilgi aldigimiz input ve textarea elemanlarindan 
//                   secilen yazinin baslangic ce bitis indis degerlerini dondurur 
     
//        select = ekleme yaptiktan sonra ekleneni secer
//        start  = ekleme yaptiktan sonra eklenenin basini secer
//        end    = ekleme yaptiktan sonra eklenin sonunu secer

// setRangeText = baslnagic ve bitis indislerine gore secilen degeri belirlenen deger gore degistirilir.
// setSelectionRange() = Belirlenen baslangic ve bitis degerlerini input yada textarea icinde secilmesini saglar.
// stepUp veya stepDown() methotlari = input etiketinde tipi number, time, date, ringe, month, week olan butun etiketlerin degerini azaltmak ve arttirmak icin kullanilir.
// showPicker() = Farkli tiplerdeki inputlarin diologlarini acmak icin kullanilir.





const aTags = document.querySelectorAll("a");

aTags.forEach((a) => {
    a.addEventListener("click", (e) => {
        const href = e.target.getAttribute("href");
        if (
            href.includes("http") &&
            !confirm("Dış bir bağlantıya gidiyorsun, dikkat ettin mi?")
        ) {
            // dış link
            e.preventDefault();
        }
    });
});

const pickerBtn = document.getElementById('picker-btn')
const timeInput = document.querySelector('.time')
const dateInput = document.querySelector(".date");
const fileInput = document.querySelector(".file");


pickerBtn.addEventListener('click', e => {
    timeInput.showPicker()
})


// const test1 = document.querySelector('.test1')
// const test2 = document.querySelector('.test2')
// const test3 = document.querySelector('.test3')

// test1.addEventListener("click", () => console.log("test1"), true)
// test2.addEventListener('click', () => console.log('test2'), true)
// test3.addEventListener('click', e => {
//     e.stopPropagation()
//     console.log('test3')
// }, true)




const test1 = document.querySelector(".test1");
const test2 = document.querySelector(".test2");
const test3 = document.querySelector(".test3");

test1.addEventListener("click", ()  => console.log("test1"));
test2.addEventListener("click", ()  => console.log("test2"));
test3.addEventListener("click", (e) => {
        //  e.stopPropagation();
        e.stopImmediatePropagation()
        console.log("test3");
    });

test3.addEventListener("click", e => {
    //e.stopPropagation();
    console.log("test3 2. event")
})

const todos = document.getElementById('todos')

todos.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', e => {
        console.log("completed calisti");
        e.target.classList.toggle('completed')
    })
})

todos.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation()
        e.target.closest("li").remove();
    });
});


const h1 = document.querySelector('h1')
let propName = 'color'

// h1.style[propName] = 'red'
// h1.style.color = 'red'
//h1.style.setProperty(probName, "red");
h1.style.setProperty('color', 'red')
//h1.style.removeProperty('background-color')

// console.log(
//     document.styleSheets[0].cssRules[1].style.setProperty('')
// )

console.log(document.styleSheets[0].cssRules[2].style.removeProperty("text-decoration"));
console.log(document.styleSheets[0].cssRules[2].style.getPropertyValue('background-color'));
console.log(document.styleSheets[0].cssRules[2].style.getPropertyPriority('background-color'));

// const mq = window.matchMedia("(max-width: 480px)");
// console.log(mq);


// const isMobile = window.matchMedia("(max-width: 480px)");
// isMobile.addEventListener('change', e => {
//     console.log(e)
// })

function mobileDetectHandle() {
    if (isMobile.matches){
        document.body.classList.add('mobile')
    }else(
        document.body.classList.remove('mobile')
    )
}
const isMobile = window.matchMedia("(max-width: 480px)");
mobileDetectHandle()
isMobile.addEventListener("change", mobileDetectHandle);

// document.designMode = 'on'


const input = document.querySelector('input')
input.addEventListener('select', e => {
    console.log(e.target.value.substring(
        e.target.selectionStart,
        e.target.selectionEnd
    ))
    // console.log(e.target.selectionStart, e.target.selectionEnd);
})

const textarea = document.querySelector('textarea')
const actionButtons = document.querySelectorAll('.action-btn')

actionButtons.forEach(button => {
    button.addEventListener('click', e => {
       let selectedText = textarea.value.substring(
        textarea.selectionStart,
        textarea.selectionEnd
       )

       switch(e.target.dataset.type){
            case 'bold':
                selectedText = `<b>${selectedText}</b>`
                break
            case 'italic':
                 selectedText = `<i>${selectedText}</i>`
                break
            case 'uppercase':
                 selectedText = selectedText.toLocaleUpperCase('TR')
                break
       }

        textarea.setRangeText(
            selectedText,
            textarea.selectionStart,
            textarea.selectionEnd,
            'select'
            //"start"
            //'end'  
        );
        textarea.focus();
        preview.innerHTML = textarea.value;
        //console.log(e.target.dataset.type);
    });
});

textarea.addEventListener('keyup', e => {
    preview.innerHTML = e.target.value;
})
 
// textarea.addEventListener("keydown", (e) => {
//     console.log(e.target.value);
//     preview.innerHTML = e.target.value;
// });

// const preview = document.getElementById("preview");
// textarea.addEventListener("change", (e) => {
//     console.log(e.target.value);
//     preview.innerHTML = e.target.value;
// });



const inputNumber = querySelectorAll('input[type = numberInput ]')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')

incrementBtn.addEventListener('click', e =>{
    inputNumber.stepUp()
})
decrementBtn.addEventListener('click', e =>{
    inputNumber.stepDown()
})



    