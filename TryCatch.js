// hello.toUpperCase();
// Uncaught ReferenceError: hello is not defined
//     at TryCatch.js:1:1

try {
    hello.toUpperCase();
} catch {
    console.log("ERROR!!!!");
}

// TryCatch.js:7 Uncaught SyntaxError: Missing catch or finally after try (at TryCatch.js:7:1)

console.log("AFTER!!")

// ERROR!!!!
// TryCatch.js:13 AFTER!!

// function yell(msg) 
// {
//     console.log(msg.toUpperCase().repeat(2));
// }

// yell("hello")
// TryCatch.js:17 HELLOHELLO
// undefined
// yell(98734)
// TryCatch.js:17 Uncaught TypeError: msg.toUpperCase is not a function
//     at yell (TryCatch.js:17:21)
//     at <anonymous>:1:1
// yell @ TryCatch.js:17
// (anonymous) @ VM113:1Understand this errorAI

function yell(msg) 
{
    try{
        console.log(msg.toUpperCase().repeat(2));
    } catch(e) {
        console.log(e);
        console.log("PLEASE PASS A STRING NEXT TIME!");
    }
}

// yell(97823)
// TryCatch.js:38 TypeError: msg.toUpperCase is not a function
//     at yell (TryCatch.js:36:25)
//     at <anonymous>:1:1
// TryCatch.js:39 PLEASE PASS A STRING NEXT TIME!
// undefined
// yell("hello")
// TryCatch.js:36 HELLOHELLO
// undefined
// yell(true)
// TryCatch.js:38 TypeError: msg.toUpperCase is not a function
//     at yell (TryCatch.js:36:25)
//     at <anonymous>:1:1
// TryCatch.js:39 PLEASE PASS A STRING NEXT TIME!
// undefined
// yell([])
// TryCatch.js:38 TypeError: msg.toUpperCase is not a function
//     at yell (TryCatch.js:36:25)
//     at <anonymous>:1:1
// TryCatch.js:39 PLEASE PASS A STRING NEXT TIME!
// undefined
// yell("")
//  
// undefined