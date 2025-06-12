// const person = {
//     firstName: "Viggo",
//     lastName: "Mortensen",
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// person
// {firstName: 'Viggo', lastName: 'Mortensen', fullName: ƒ}
// person.fullName()
// 'Viggo Mortensen'

// const person = {
//     firstName: "Viggo",
//     lastName: "Mortensen",
//     fullName: () => {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// person.fullName()
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// 'undefined undefined'

// const person = {
//     firstName: "Viggo",
//     lastName: "Mortensen",
//     fullName: () => {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function() {
//         setTimeout(function () {
//             console.log(this);
//             console.log(this.fullName())
//         }, 3000)
//     }
// }

// person.shoutName()
// undefined
// ArrowFunction&this.js:36 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ArrowFunction&this.js:37 Uncaught TypeError: this.fullName is not a function
//     at ArrowFunction&this.js:37:30
// (anonymous) @ ArrowFunction&this.js:37
// setTimeout
// shoutName @ ArrowFunction&this.js:35
// (anonymous) @ VM510:1Understand this errorAI

const person = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: function() {
        console.log(this);
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function() {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}

// person.shoutName()
// undefined
// ArrowFunction&this.js:61 {firstName: 'Viggo', lastName: 'Mortensen', fullName: ƒ, shoutName: ƒ}
// ArrowFunction&this.js:56 {firstName: 'Viggo', lastName: 'Mortensen', fullName: ƒ, shoutName: ƒ}
// ArrowFunction&this.js:62 Viggo Mortensen