import './bootstrap';


// Promise, Fetch, Async/Await

// Promise = pending, fulfilled, rejected
// Promise = soz verme 
// sozunde duruyorsan dean blokta yakaliyorsun 
// sozunde durmuyorsan catch blokta yakaliyorsun
// callback promisten cok farki yok ama islem bittiginde senin gonderdigin fonsiyonu calistiriyor. pek onerilmez.

//fetch API istek attigimizda bize promis diye bir deger donuyor .then veya .catch ile yakalama gerekiyor

//asycn ve await olan islemlerde oncelik islem yapmamizi sagliyor bunlar birbirinden ayrilamazlar kesinlikle kullancaksin ikisini
// bir fonsiyonun basinda async varsa promisse donusur. promise donusen bir seyi ya .then blogu ile yakalayabilirsin yada await ile cevap vermesini bekleyebilirsin. bir sonraki satirda cevap verdikten sonra yorumlamaya baslayacaktir/


const test = callback => {
    setTimeout(() => {
        callback('hata olustu !', [])
    }, 2000)
}

const callback = (err, data) => {
    if (err){
        console.log('hata', err)
    }else{
        console.log('data', data)
    }
    
}
//test((err, data) =>{})
//test(callback)

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve("islem basarili");
//         reject("islem basarisiz");
//     }, 1500)
//     //resolve('islem basarili')
//     //reject('islem basarisiz')
// })

// promise.then((data) =>{
//     console.log(data)
// }).catch(err => {
//     console.warn(err)
// } )


//console.log(promise)


const API_URL = 'https://jsonplaceholder.typicode.com/posts'
// 1. yol
// async function getPosts() { 
//    try{
//      const response  = await fetch(API_URL)
//     const data = await response.json()
//         console.log(data)
//    }catch (err){
//     console.error(err)
//    }
//  }
//  getPosts()

// 2.yol

// users.map(async user => { // bu  sekilde de kullanabilirsin
//     await
// }) 
const getPosts = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
getPosts();


// fetch(API_URL)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))


// fetch(API_URL, {
//     method: "POST",
//     body: formData,
// });