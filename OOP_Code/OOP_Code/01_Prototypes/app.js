//String.prototype is a "template object" for every single string.

// []
// []length: 0[[Prototype]]: Array(0)
// [1, 2, 3].push(4)
// 4
// const arr = [1, 2, 3]
// undefined
// arr
// (3) [1, 2, 3]
// arr.sing = function() {
//     console.log("LA LA LA!");    
// }
// ƒ () {
//     console.log("LA LA LA!");    
// }
// arr
// (3) [1, 2, 3, sing: ƒ]
// arr.push(5)
// 4
// arr
// (4) [1, 2, 3, 5, sing: ƒ]
// const body = document.body
// undefined
// console.dir(body)
// VM523:1 body
// undefined
// Array.prototype
// [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]


//We could go crazy and add our own method called yell...
// String.prototype
// String {'', yell: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}
// String.prototype.grumpus = () => alert("GO AWAY!")
// () => alert("GO AWAY!")
// String.prototype
// String {'', yell: ƒ, grumpus: ƒ, anchor: ƒ, at: ƒ, …}
// const cat = "blu"
// undefined
// cat.grumpus()
// undefined
String.prototype.yell = function() {
	return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function() {
	return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
};
const nums = [ 6, 7, 8, 9 ];
nums.pop(); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"

// cat.__proto__
// String {'', yell: ƒ, grumpus: ƒ, anchor: ƒ, at: ƒ, …}