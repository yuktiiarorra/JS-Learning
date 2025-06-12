// function rollDie(numSides){
//     if(numSides === undefined) numSides = 6;
//     return Math.floor(Math.random() * numSides) + 1
// }

// rollDie()
// 2
// rollDie(20)
// 9

function rollDie(numSides = 6){
    return Math.floor(Math.random() * numSides) + 1
}

// rollDie()
// 1
// rollDie()
// 4
// rollDie(20)
// 10

// function greet(msg, person){
//     console.log(`${msg} ${person}!`)
// }

// greet("Hello", "Joaquin")
// DefaultParams.js:23 Hello Joaquin!
// undefined

// function greet(msg = "Hey there", person){
//     console.log(`${msg} ${person}!`)
// }

// greet("Joaquin")
// DefaultParams.js:31 Joaquin undefined!
// undefined

// function greet(person, msg = "Hey there"){
//     console.log(`${msg} ${person}!`)
// }

// greet("Joaquin")
// DefaultParams.js:39 Hey there Joaquin!
// undefined

// greet("Joaquin", "HIIII")
// DefaultParams.js:39 HIIII Joaquin!
// undefined

function greet(person, msg = "Hey there", punc = "!"){
    console.log(`${msg} ${person}${punc}`)
}

// greet("Rosa")
// DefaultParams.js:51 Hey there Rosa!
// undefined
// greet("Rosa", "Hiya", "!!!!!!")
// DefaultParams.js:51 Hiya Rosa!!!!!!
// undefined