import './bootstrap';

//kapsam - nesneler (objects)

// let -> mutable       = degisebilr
// const -> immutable   = degisemez  =/=


//let name = 'Tayfun'
// console.log(name)
//ad = 'Tayfun' // Window scope

// {
//     let deneme = "test"
//     console.log(deneme)
// }


// let name = 'Tayfun'
// let surname = 'Erbilen'

// function  letsLearnScope() {
//     console.log(name, surname)

//     if (true){
//         let name = 'Gokhan'
//         let surname = 'Bayar'
//         console.log(name, surname)

//     }
//     console.log(name, surname)
//   }
// letsLearnScope()
// console.log(name, surname)



// for (var i = 1; i <= 5; i++){
//     console.log('i', i)
// }
// console.log('son i ', i)


// const user = {}

// console.log(user)


const user = {
    name: 'Levent', 
    surname: 'Erbilen',
    age: 27,
    isMarried: false,
    test: {
        deneme: 'Deneme Text'
    },
    'phone number': 32132131314  ,
    skills: ['Html', 
             'Css', 
             'Php', 
             'Javascript', 
             ],
    siblings: [
        {
            name: 'Meltem',
            surname: 'Yolcu',
            age: 28,
            isMarried: true,
            skills: [
                'Yemek yapmak',
                'hava yapmak',
                'cocuk bakmak'
            ]
        }
    ],
    getFullName2: () => `${user.name} ${user.surname}`,
    getFullName: function(){
        return `${this.name} ${this.surname}`
    },  
}

//let keyName = 'age'

//Object.freeze(user)

const formatter = new Intl.ListFormat('tr', {
    style: 'long',
    type: 'conjunction'
});




console.log(user.hasOwnProperty("country")); 
//let keyName = 'name'
user.name  = 'Ahmet'
user.title = 'Developer'
user.country = 'Turkey'
user.skills.push('React')
user.skills.push('Svelte')
user.getPersonInfo = function () {
    //let skillsWithoutLastOne = this.skills.splice(0, this.skills.length -1 ).join(',')
    //console.log(skillsWithoutLastOne)
    //let lastSkill = this.skills.at(-1);
    //let skills = `${skillsWithoutLastOne} and ${lastSkill}`
    let skills = formatter.format(this.skills)
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
    //console.log(skills )
}
//let lastSkill = this.skills[this.skills.length -1]

// console.log(user.getPersonInfo())


//console.log(user)
//console.log(user.getFullName2());

//console.log(user[keyName])



//let newUser = Object.assign({}, user)
let newUser = {...user}
//console.log(user)

newUser.name = 'Murat'
//console.log(user)

//console.log(Object.keys(user))
//console.log(Object.values(user));
//console.log(Object.entries(user));

for (let [key, val] of Object.entries(user)){
    //console.log(key, val)
    //console.log(`Key = ${key}- Value = ${val}`)
}

//console.log(user.hasOwnProperty("country"));
console.log( user );

//console.log(user['surname'])
//console.log(user['phone number '])
//console.log(user.siblings[0].skills[2])
//console.log(user.isMarried ? 'Evli' : 'Bekar' )







