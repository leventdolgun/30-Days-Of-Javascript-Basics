import { Result } from "postcss";
import "./bootstrap";

// RegExp = Düzenli İfadeler

// 1.yol RegExp constructor
// let str =  'Ben 30 yasindayim 1993 yilinda dogdum'
// let username = 'tayfun_erbilen'
// let pattern = 'love'
// let flag = 'gi'
// let regExp = new RegExp('love', 'gi')
//let regExp = new RegExp(pattern, flag)

// 2.yol RegExp constructor
// let str =  'Ben 30 yasindayim 1993 yilinda dogdum'
// let username = 'tayfun_erbilen'
// let pattern = 'love'
// let flag = 'gi'
// let regex = /love/gi
//let regExp = new RegExp('love', 'gi')
//let regExp = new RegExp(pattern, flag)

// let word = /salak/
// let comment = 'sen salak misin kardesim'
// console.log(
//     word.test(comment)
// );

// let word = /salak/i
// let comment = prompt ('Yorum Yazin ama yazarken dikkatli olun!')
// console.log(word.test(comment));
// if (word.test(comment)) {
//     alert('Hayir sen salaksin kardesim')
// }

// const string = 'I lOve Javascript and i love prototurk and i love coding '
// console.log(string.match(/love/gi));
//console.log(string.search(/love/ig));

//const txt = 'Python is the most beautiful language that a human begin has ever created. I recommend python for a first  programming language '

//let matchReplaced = txt.replace(/Python|python/g, "Javascript");
//let matchReplaced = txt.replace(/(P|p)ython/g, "Javascript");
//let matchReplaced = txt.replace(/python/gi, "Javascript");
//console.log(matchReplaced)

// let str = "Ben 30 yasindayim 1993 yilinda dogdum";
//console.log(str.match(/[0-9]/g));
console
    .log
    //str.match(/\D/g)
    ();

// let firstName = '1tay fun.';
// console.log(
//     /^[a-z 0-9 \. ]+$/gi.test(firstName)
// );

// let firstName = "tayfun";
// console.log(/^[^0-9]+$/gi.test(firstName));

// let str = "Ben 30 yasindayim 1993 yilinda dogdum";
// console.log(
// str.match(/\d{2}/gi)
// str.match(/\d{2}/gi)
//     str.match(/\b\d{2,4}\b/g)
// );

// let name = 'tayfun';
// console.log(
// /[u|a]n$/gi.test(name)
//     /a?n$/gi.test(name)
// );

// let str = "Ben 30 yasindayim 1993 yilinda dogdum telefon no 5555555555";
// console.log(
     // str.match(/\b[a-z]+\b/gi)
     //str.match(/\b[0-9]+\b/gi)
    // str.match(/\b\w+\b/gi)
// );



// let pattern = /^[A-Z]{2}[a-z]{3,12}$/gi;
// let name = 'ASaba';
// let result = pattern.test(name)
// console.log(result)


// function is_valid_variable (str){
//  console.log(
     // /^[a-z_]+$/i.test(str)
//     /^[\w\.]+$/i.test(str)
//  )
// }
//is_valid_variable('tayfun-Erbi.len2'); // true
// is_valid_variable('first_name'); // true
// is_valid_variable('first-name'); // false
// is_valid_variable('1firts_name');// false
// is_valid_variable ('firstname'); // true


// let str = "Ben 30 yasindayim 1993 yilinda dogdum telefon no 5555555555";
// console.log(
//      str.match(/\b[0-9]+\b/gi)  
//   )


let date = '2022-12-12'
let match =  date.match(/(?<Year>\d{4})-(?<Mount>\d{2})-(?<Day>\d{2})/)
console.log(match.groups);