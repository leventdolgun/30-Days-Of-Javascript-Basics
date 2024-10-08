import "./bootstrap";


let result = parseInt(prompt ('2 + 5  kac yapar?' , '2 + 5'))


if (result === 7 ) {
    // kodlariniz calismaya baslar
    console.log('Tebrikler Dogru cevabi verdin!')
}else{
    console.log('Hatali cevap verdin Dogru cevap 7 olmaliydi!')
}

console.log(
    result === 7 ? 'Tebrikler Dogru Cevap' : 'Kusura Bakma Hatali Cevap'
)

// let number  = 5

// if (number === 4 ){
//     //
// }else if(number >= 5 ){
//     //
// }else if (number > 5) {
//     //
// } else {
//     //
// }


switch (result){
    case '7':
        console.log('Dogru cevap - switch')
    break
    case '5':
        console.log('cevap hatali mi - aferin')
    break
    default:
        console.log('hatali cevap - switch')
}