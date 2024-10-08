import './bootstrap';

// elements = Form ogelerinin tamamini elements ozelligi ile alabiliriz 
// document.forms = Dokumandaki tum form elemanlarini dondurur. Ulasmak icin form elemanina verilen id degeri yeterlidir.
// submit()   = Bir formu programlamatik olarak gondermek sitersiniz bu methodu kullanabilirsiniz.
// reser()    = Bir formu varsayilan degerlerine programlamatik olarak dondurmek isterseniz bu methodu kullanabilirsin.

// VALIDATION = Form elemanlarinin gecerli olup olmadigini kontrol edebildigimiz bir cok yol olmasina ragmen
//              kisa yolari da var.
//   validaty = Form elemanina ait validasyon durumlarini dondurur.
     
//     badInput = Deger belirlenen tipten farkli bir deger iceriyorsa true doner ornegin tipi number olan bir input'a sayi haricinde bir deger girildiginde sonucu gorebilirsiniz.
//     patternMismatch = Deger patterin niteligindeki desen ile eslesmezse true doner
//     rangeUnderflow  = Deger belirtilen minimum degerinin altindaysa true doner.
//     rangeOverflow   = Deger belirtilen maksimum degerinin ustundeyse true doner.
//     stepMismatch    = Deger belirtilen step niteligine uygun degilse true doner 
//     tooLong         = Deger belirtilen maxLenght deerinden daha uzunsa true doner 
//     tooShort        = Deger belirtilen maxLenght degerinden daha kisaysa true doner.
//     typeMismatch    = Deger belirtilen tipe uygun degilse (orn: email- url) true doner.
//     valueMissing    = Deger required niteligi belirlenmisse ve bos ise true doner.


//     ValidationMessage = validasyon mesajini dondurur.

// setCustomValidity() ve reportValidity()  = Elemana ozel validasyon mesaji tanimlamanizi saglar. ve elemanin gecerli olup olmadigini kontrol etmenizi saglar.     
// checkValidity() = Form ogesiningecerli olup olmadigini dondurur.


// Event() ve dispatchEvent() = Bir olayi simule etmek icin bu sinifi kullaniyoruz. Ornegin bir butan'a click olayi tanimlayalim ve bunu programlamatik olarak simule edelim simule edebilmek icin dispatchEvent() metoduna paremetre olarak Event() sinifini geciyoruz.
// costumEvent  = bazen onceden tanmli olaylari teiklemek isteyebiliriz. ornegin bir tab uygulamasi yapalim ve tab degistiginde bir ozel olay firlatip bunu yakalayalim.


// 1.yol
// const form1 = document.getElementById('form1')
// console.log(
//     form1.elements
// )

// 2.yol
console.log(
    document.forms.formTest
)

// const submitBtn = document.getElementById('submit-btn')
const resetBtn = document.getElementById("reset-btn");

//submitBtn.addEventListener("click", () => {
//    [...document.forms.form1.elements].forEach(element => {
        // console.log(element.validity);
        //console.log(element.validationMessage);

 //   });
//});
 function checkValidity(element){
       if (element.validity.badInput) {
           element.setCustomValidity("Geçersiz bir değer girdiniz");
       } else if (element.validity.patternMismatch) {
           element.setCustomValidity("Geçersiz bir format girdiniz");
       } else if (element.validity.rangeUnderflow) {
           element.setCustomValidity("Minimum değerden daha az");
       } else if (element.validity.rangeOverflow) {
           element.setCustomValidity("Minimum değerden daha fazla");
       } else if (element.validity.stepMismatch) {
           element.setCustomValidity("Adımda bir sıkıntı var");
       } else if (element.validity.tooLong) {
           element.setCustomValidity("Çok uzun be gardaş");
       } else if (element.validity.tooShort) {
           element.setCustomValidity("Bu da çok kısa kaldı");
       } else if (element.validity.typeMismatch) {
           element.setCustomValidity("Tipsiz misin biraz?");
       } else if (element.validity.valueMissing) {
           element.setCustomValidity("Buralar hep dutluk!");
       } else {
           element.setCustomValidity("");
       }
       element.reportValidity()
 }
// submitBtn.addEventListener("click", () => {
//     [...document.forms.form1.elements].reverse().forEach((element) => {
         //2. yol
//         checkValidity(element)
//         element.addEventListener('input', e => {
//             checkValidity(e.target)
//         })
//   });

document.forms.form1.addEventListener("submit", e => {
    e.preventDefault();
        [...document.forms.form1.elements].reverse().forEach((element) => {
            //2. yol
            checkValidity(element);
            element.addEventListener("input", (e) => {
                checkValidity(e.target);
            });
            if (e.target.checkValidity()){
                e.target.submit()
            }
    });

    // 1. yol
    // if (element.validity.valueMissing){
    //     element.setCustomValidity('bu alan zorunlu gardas!')
    //     element.reportValidity()
    // }
    //    });
});

//submitBtn.addEventListener('click', () => {
    // 1. yol
    // setTimeout(() => {
    //     document.forms.form1.submit();
    // }, 1000)
    // 2.yol
    //document.forms.form1.submit()
// })

resetBtn.addEventListener("click", () => {
    // 1. yol
    // setTimeout(() => {
    //     document.forms.form1.reset();
    // }, 1000);
    // 2.yol
    document.forms.form1.reset()
});

const testBtn = document.getElementById('test')

testBtn.addEventListener('click', e => {
    if (e.isTrusted) {
       console.log('Butona Tikladin !');
    }else{
        console.log('Hile yaptin ! ')
    }
    // console.log(e.isTrusted)
    
})

testBtn.dispatchEvent(
    new Event("click")
);

const tab = document.querySelector('.tab')
const buttons = tab.querySelectorAll('nav button')
const contents = tab.querySelectorAll('.contents section')

// ilk taba active classi ekle
buttons[0].classList.add('active')

// ilk tab contenti haric digerlerini gizle 
console.log(
    [...contents].slice(1).forEach(content => content.style.display = 'none')
)

buttons.forEach((button, index) => button.addEventListener('click', e => {
    buttons.forEach(btn => btn.classList.remove('active'))
    e.target.classList.add('active')
    contents.forEach(content => content.style.display = 'none')
    contents[index].style.display = 'block'
    tab.dispatchEvent(
        new CustomEvent('tabChanged', {
            detail: {
                tab: index
            }
        })
    )
    // Haberdar ol... !
    //console.log(contents[index]);
}) )

tab.addEventListener('tabChanged', e => {
    console.log(e.detail.tab);
    // console.log('Tab Degisti')
})



