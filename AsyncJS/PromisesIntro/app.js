// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// fakeRequestCallback("books.com", function() {
//     console.log("IT WORKED!!!!")
// }, function() {
//     console.log
//     ("ERROR!!!")
// })

// fakeRequestCallback("books.com", 
//     function(response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
// }, function(err) {
//         console.log("ERROR!!!", err)
// })

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })

// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

                // fakeRequestPromise("jssdfjhbds")
                // Promise {<pending>}
                // const res = fakeRequestPromise("hikingtrails.com/api/nearme")
                // undefined
                // res
                // Promise {<pending>}
                // res
                // Promise {<fulfilled>: 'Here is your fake data from hikingtrails.com/api/nearme'}
                // let response = fakeRequestPromise("hikingtrails.com/api/nearme")
                // undefined
                // response
                // Promise {<fulfilled>: 'Here is your fake data from hikingtrails.com/api/nearme'}
                // let response = fakeRequestPromise("hikingtrails.com/api/nearme/again")
                // undefined
                // response
                // Promise {<pending>}
                // Uncaught (in promise) Connection Timeout :(          app.js:17
                // response
                // Promise {<rejected>: 'Connection Timeout :('}

// const request = fakeRequestPromise('yelp.com/api/coffee/page1');

// request
//     .then(() => {
//         console.log("PROMISE RESOLVED!")
//         console.log("IT WORKED!!!")
//     })
//     .catch(() => {
//         console.log("PROMISE REJECTED!")
//         console.log("OH NO, ERROR!!!")
//     })
    
            // PROMISE RESOLVED!    
            // IT WORKED!!!
            // PROMISE REJECTED!
            // OH NO, ERROR!!!
            
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })


// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    })



