import './bootstrap';

// web storage onemli bir konu kesinlikle dikkat et

// seseion Storage  =  o anki oturumda gecerli browser kapandigi anda oturumda kapanir . kaydedelen bilgilerde otomatik olarak silinir.
// local Storage    = kullanici new data olusturmadigi surece localde kalir o pc de kalmaya devam eder

// setItem(), getItem(), reomoveItem(), clear(), key()


console.log(
    // localStorage, // = localstorage diye bir obje var 
    // localStorage.clear(), = depolama alaninda herseyi silmek icin kullanilir 
    // localStorage.setItem(), = bir veri depolamak istersek kullaniyoruz key ve value (anahtar ve deger)
    // localStorage.getItem(),
    // localStorage.removeItem(),
    // localStorage.key(),
    
)


// localStorage.setItem('name', 'tayfun')
// console.log(localStorage.getItem('name'))


// localStorage.setItem('name', 'tayfun')
// console.log(localStorage.key(0))

// const names = ['tayfun', 'ahmet', 'levent']
// const user = {
//     name: 'Levent',
//     surname: 'Dolgun'
// }
// localStorage.setItem('user', JSON.stringify(user))
// localStorage.setItem('names', JSON.stringify(names))
// console.log(localStorage)

//localStorage.setItem('user', JSON.stringify(user, undefined,4))

//localStorage.removeItem('names')

//localStorage.clear()

// console.log(localStorage)

// console.log(
//     JSON.parse(localStorage.getItem('user'))
// )


let basket = JSON.parse(localStorage.getItem('basket')) || []
const products = [
    {
        id: 1,
        title: "Macbook Pro 2021",
        price: 30_000,
    },
    {
        id: 2,
        title: "Macbook Air 2023",
        price: 150,
    },
    {
        id: 3,
        title: "Iphone 16 pro 2025",
        price: 100,
    },
];

function saveToStorage() { 
    localStorage.setItem('basket', JSON.stringify(basket))
}


function addBasket(productId) {  
    const basketIndex = basket.findIndex(b => b.productId === productId)
    // console.log(basketIndex)
    if (basketIndex > -1) {
        basket[basketIndex] = {
            ...basket[basketIndex],
            amount: basket[basketIndex].amount + 1
        };
    } else {
        basket.push({
            productId,
            amount: 1,
        });
    }
    saveToStorage();
}
    

function removeBasket(productId) { 
    const item = basket.find(p => p.productId === productId)
   if (item){
     if (item.amount === 1) {
         basket = basket.filter((p) => p.productId !== productId);
     } else {
         basket = basket.map((i) => {
             if (i.productId === productId) {
                 i.amount -= 1;
             }
             return i;
         });
     }
   }
    saveToStorage();
 }

 function totalPrice() { 
    return basket.reduce((prev, basket) => {
        const product = products.find((p) => p.id === basket.productId);
        return prev += (product.price * basket.amount)
    }, 0)
  }

removeBasket(1)

console.log(
    totalPrice()
)

//  addBasket(1)
//  addBasket(1)
//  addBasket(2)
//  addBasket(2)
//  addBasket(2);
//  addBasket(3);
//  addBasket(3);
//  addBasket(3);
// addBasket(3);
//localStorage.clear()

// addBasket(1)
// addBasket(2)
// addBasket(3)

// console.log(basket)
//removeBasket(1,2, 3)
//console.log(localStorage.clear() ) // buna dikkat et siler localdeki verileri siler.

//localStorage.clear()
//console.log(basket) 
//console.log(totalPrice())

