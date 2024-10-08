import './bootstrap';

// closure

//fonksiyon icinde fonksiyon tanimlayabiliyoruz ve iceride tanimladigimiz fonksiyon kodlari disindaki fonksiyonun degiskenlerine erisip onu kullanabilyorsa icerisinde bunun adina closure deniyor.


// function outerFunction() {
//     let count = 0 
//     function innerFunction() {
//         count++
//         return count
//       }
//       return innerFunction
//   }
//   const innerFunc = outerFunction()

//   console.log(innerFunc())
//   console.log(innerFunc())
//   console.log(innerFunc());
  

function counter(){
    let count = 0
    function up() {
        count ++
        return count
    }
    function down() {
        count --
        return count
      }
    return {
       up,
       down
    }
  }

let count = counter()

console.log(count.up())
console.log(count.up())
console.log(count.up())
console.log(count.down());









