import "./bootstrap";

// let numOne = 3
// let numTwo = 3

// console.log(numOne == numTwo)

// let js = "Javascript"
// let py = "Python"

// console.log(js == py)

// let lightOn = true
// let lightOff = false

// console.log(lightOn == lightOff)

// let nums = [1, 2, 4];

// nums[0] = 7
// nums[1]
// nums[2];

// console.log(nums)

//let nums = [1, 2, "js code ", true, null, undefined];

// let num  = [1, 2, 3]
// let nums = [1, 2, 3]

// console.log( num == nums )

//let nums1 = [1, 2, 3];
//let nums2 = [1, 2, 3];
//let nums2 = nums1
//console.log(nums1 == nums2);

let nums1 = [1, 2, 3];
//let nums2 = [1, 2, 3];
let nums2 = nums1;
console.log(nums1 == nums2);

let user1 = {
    name: "Tayfun",
    surname: "Erbilen",
};
let user2 = {
    nam: "Tayfur",
    surname: "Erbilen",
};
console.log(user1 == user2);


//let name = 'Tayfur'
//let surname = 'Erbilen'
//let space = ' '

//let fullname = name + ' ' + surname
//console.log(fullname)

let name = 'Tayfun'
let surname = 'Erbilen'
let a = 20
let b = 20 

let fullname = `${name} 
levent
dolgun
  
${a} + ${b} = ${a + b}  

${surname}`
console.log(fullname)