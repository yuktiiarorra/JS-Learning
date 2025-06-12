// write a function which accepts a, b and it returns another function which when called returns the sum of a & b

// function abc (a, b){
//     return function () {
//         return a + b;
//     }
// }

// write a function which accepts a, b and it returns an object which has a property sum(function) which when called returns the sum of a & b

function abc (a, b){
    // function func() {
    //     return a + b;
    // }
    // const obj = {};
    // obj.sum = a + b;
    // const bla = {};
    // bla.prop = obj; 
    // return bla;
    // return {}.sum = a + b;
    const obj = {};
    obj.sum = function(){
        return a + b; 
    }
    obj.diff = function(){
        return a - b;
    }
    obj.a = a;
    obj.b = b;
    return obj
}
const add = abc(15, 17)
console.log(add)
