import "./bootstrap";


// // 27. dersin eksra eklenen kisa projesi devami farkli bir islem yok
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

// const button = document.getElementById("generete-color-btn");

// const colors = ['blue', 'red', 'pink', 'purple', 'green', 'orange']
// button.addEventListener('click', () => {
//     //console.log('butona tikladin mi lutfen soyle!')
//     document.body.style.backgroundColor = colors[1]
// })



const button = document.getElementById("generete-color-btn");
//const colors = ["blue", "red", "pink",'yellow', "purple", "green", "orange"];
//1. yol
const generateRandomNumber  = (maxNumber) => {
    return Math.floor(Math.random() * (maxNumber +1)

)}
const generateRGBColor  = () => {
    return [
        generateRandomNumber(255),
        generateRandomNumber(255),
        generateRandomNumber(255),
    ];
}
//2. yol
//function generateRandomNumber() {}

button.addEventListener("click", () => {
     document.body.style.backgroundColor = `rgb(${generateRGBColor().join(', ')})`;


    //console.log(generateRGBColor().join(', '))
    // const randomNumber1 = generateRandomNumber(255);
    // const randomNumber2 = generateRandomNumber(255);
    // const randomNumber3 = generateRandomNumber(255);

    // document.body.style.backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;

    //console.log('butona tikladin mi lutfen soyle!')
    //document.body.style.backgroundColor = colors[6];
    // console.log(
    //     //Math.random() * 7
    //     Math.floor(Math.random() * colors.length)
    // );
    //const randomNumber = Math.floor(Math.random() * colors.length);
   
    //const randomNumber2 = Math.floor(Math.random() * 256);
    // const randomNumber3 = Math.floor(Math.random() * 256);
    // console.log(randomNumber1, randomNumber2, randomNumber3);
    //document.body.style.backgroundColor = colors[randomNumber];   
    
});
