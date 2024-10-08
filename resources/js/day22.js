import { all } from 'axios';
import './bootstrap';

// DOM - 2 
// DOM = Document Object Model Day2


// let h1 = document.createElement('h1')
// h1.className = 'test'
// h1.style.backgroundColor = 'blue'
// h1.textContent = 'Bu javascript ile eklendi'


//  for (let i = 1; i <= 10; i++){
//      let h1 = document.createElement("h1");
//      h1.className = "test";
//      h1.style.backgroundColor = "blue";
//      h1.textContent = "Bu javascript ile eklendi" + i
//        document.body.prepend(h1);
//  }

for (let i = 1; i <= 10; i++) {
    let h1 = document.createElement("h1");
    h1.className = "test";
    h1.style.backgroundColor = "blue";
    h1.style.color = "#fff";
    h1.textContent = "Bu javascript ile eklendi" + i
    document.body.prepend(h1);
    //document.body.appendChild(h1);
}

  let h1 = document.createElement("h1");
  h1.className = "test";
  h1.style.backgroundColor = "blue";
  h1.textContent = "Bu javascript ile eklendi";
  document.body.prepend(h1)
  //document.body.appendChild(h1);


  const allH1Elements = document.querySelectorAll('h1.test')
  //console.log(allH1Elements)
//   for (const h1 of allH1Elements){
//     console.log(h1)
//   }


   for (const h1 of allH1Elements) {
       // h1.remove() //1.yol kesinlikle buna dikkat et siler yoksa 
       document.body.removeChild() // 2.yol  
   }

// prepend - prependChild() basinda kullanacaksak. 
// append - appendChild() sonunda kullanacaksak. 