import { Input } from "postcss";
import "./bootstrap";

// const input = document.querySelector('input[type="range"]')
// console.log(input)

// click
// change

// input.addEventListener('change', e => {
//     console.log('event objesi', e.target.value)
// })

// input.addEventListener("input", (e) => {
//     console.log("event objesi", e.target.value);
// });

// const redInput = document.getElementById("red");
// const greenInput = document.getElementById("green");
// const blueInput = document.getElementById("blue");

// 1.yol
//redInput.addEventListener("input", (e) => {
//document.body.style.backgroundColor = `rgb(${e.target.value}, ${greenInput.value}, ${blueInput.value})`
//console.log("redInput", e.target.value);
//});
//greenInput.addEventListener("input", (e) => {
//document.body.style.backgroundColor = `rgb(${redInput.value}, ${e.target.value}, ${blueInput.value})`
//console.log("greenInput", e.target.value);
//});
//blueInput.addEventListener("input", (e) => {
//document.body.style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value}, ${e.target.value})`
//console.log("blueInput", e.target.value);
//});

// 2.yol
// redInput.addEventListener("input", changeBodyColor);
// greenInput.addEventListener("input", changeBodyColor);
// blueInput.addEventListener("input", changeBodyColor);

// function changeBodyColor() {
//     document.body.style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
//   }

// const redInput = document.getElementById("red");
// const greenInput = document.getElementById("green");
// const blueInput = document.getElementById("blue");

// const inputs = document.querySelectorAll('input[type="range"]')
// inputs.forEach(input => {
//         input.addEventListener('input', changeBodyColor)
//     // console.log('input', input)
// })
// // redInput.addEventListener("input", changeBodyColor);
// // greenInput.addEventListener("input", changeBodyColor);
// // blueInput.addEventListener("input", changeBodyColor);
// function changeBodyColor() {
//     document.body.style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
// }

// const redInput = document.getElementById("red");
// const greenInput = document.getElementById("green");
// const blueInput = document.getElementById("blue");

// const inputs = document.querySelectorAll('input[type="range"]');
// inputs.forEach(input => {
//     input.addEventListener('input', () => {
//         // console.log(
//         //     // e.target.nextSibling
//         //     input.nextSibling
//         // );
//          input.nextElementSibling.innerText = input.value
//         changeBodyColor()
//     });
// });
// function changeBodyColor() {
//     document.body.style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
// }

// const redInput = document.getElementById("red");
// const greenInput = document.getElementById("green");
// const blueInput = document.getElementById("blue");

// const inputs = document.querySelectorAll('input[type="range"]');
// inputs.forEach(input => {
//     input.nextElementSibling.innerText = input.value
//     input.addEventListener('input', () => {
//         input.nextElementSibling.innerText = input.value
//         changeBodyColor()
//     })
// });

// changeBodyColor();

// function changeBodyColor() {

//     let rgb = 'rgb('
//     inputs.forEach((input, index) => {
//         rgb += input.value + (index !== inputs.length - 1 ? ',' : '')
//         //console.log('index',  index)
//     })
//     rgb += ')'
//      document.body.style.backgroundColor = rgb

//      console.log(rgb)
//     // console.log(
//     //     [...inputs].reduce
//     //     //inputs
//     // )
//     //  document.body.style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
// }

// const inputs = document.querySelectorAll('input[type="range"]');
// inputs.forEach((input) => {
//     input.nextElementSibling.innerText = input.value;
//     input.addEventListener("input", () => {
//         input.nextElementSibling.innerText = input.value;
//         changeBodyColor();
//     });
// });

// changeBodyColor();

// function changeBodyColor() {
//     //console.log(
//     // 2. yol
//     //let rgb = [...inputs].reduce((previousValue, currentValue)=> [...previousValue, currentValue.value], [])
//     // 1. yol
//     let rgb = [...inputs].reduce((previousValue, currentValue) => {

//             return [...previousValue, currentValue.value]
//             //console.log('previousValue', previousValue)
//             // console.log('currentValue', currentValue.value)
//             //return  previousValue
//         }, [] )
//     // )
//     document.body.style.backgroundColor = `rgb(${rgb.join(', ')})`
//     //let rgb = "rgb(";
//     // inputs.forEach((input, index) => {
//     //     rgb += input.value + (index !== inputs.length - 1 ? "," : "");
//     // });
//     // rgb += ")";

//     //document.body.style.backgroundColor = rgb;
//     //console.log(rgb);

// }

function changeBodyColor() {
    // let rgb = [...inputs].reduce((previousValue, currentValue) => [...previousValue, currentValue.value],[]);
    let rgb = [...inputs].reduce((previousValue, currentValue) => {
        localStorage.setItem(currentValue.id, currentValue.value);
        let value = currentValue.value
        return [...previousValue, localStorage.getItem(currentValue.id) || currentValue.value];

        // if (localStorage.getItem(currentValue.id)){
        //     value = localStorage.getItem(currentValue.id )
        // }
        // console.log(
        //     localStorage.getItem(currentValue.id) || currentValue.value
        // )
    //    return [...previousValue, value];
       // return  [...previousValue, currentValue.value];
    },[]);
    //console.log(`rgba(${rgb.join(",")})`);
    document.body.style.backgroundColor = `rgba(${rgb.join(",")})`;
}

const inputs = document.querySelectorAll('input[type="range"]');
inputs.forEach(input => {
    //if(localStorage.getItem(input.id)){}
    input.value = localStorage.getItem(input.id) ?? input.value;
    input.nextElementSibling.innerText = input.value
    input.addEventListener('input', () => {
        //localStorage.setItem(input.id, input.value)
        //console.log(input.id)
        //console.log(input.getaAttribute(('id')))
        input.nextElementSibling.innerText = input.value;
        changeBodyColor();
    })
})

changeBodyColor()
