Math.max(1, 5, 67, 8743, 3479834, 4, 85, 20, 38, 567, 67)
// 3479834
Math.min(7, 9, 1)
// 1
const nums = [1, 5, 67, 8743, 3479834, 4, 85, 20, 38, 567, 67]
// undefined
Math.max(nums)
// NaN
Math.max(...nums)
// 3479834
nums
// (11) [1, 5, 67, 8743, 3479834, 4, 85, 20, 38, 567, 67]
Math.min(...nums)
// 1
nums
// (11) [1, 5, 67, 8743, 3479834, 4, 85, 20, 38, 567, 67]
console.log("kjfsd", "lkjfsd", "sfdj", "kjds")
// VM611:1 kjfsd lkjfsd sfdj kjds
// undefined
console.log(nums)
// VM652:1 (11) [1, 5, 67, 8743, 3479834, 4, 85, 20, 38, 567, 67]
// undefined
console.log(...nums)
// VM668:1 1 5 67 8743 3479834 4 85 20 38 567 67
// undefined
console.log("hello")
// VM764:1 hello
// undefined
console.log(..."hello")
// VM780:1 h e l l o
// undefined
console.log("h", "e", "l", "l", "o")
// VM851:1 h e l l o
// undefined

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

// const allPets = [...cats]

// allPets
// (3) ['Blue', 'Scout', 'Rocket']
// allPets.push("Shiro")
// 4
// allPets
// (4) ['Blue', 'Scout', 'Rocket', 'Shiro']
// cats
// (3) ['Blue', 'Scout', 'Rocket']

const allPets = [...cats, ...dogs]

// allPets
// (5) ['Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt']
// [...dogs, ...cats]
// (5) ['Rusty', 'Wyatt', 'Blue', 'Scout', 'Rocket']
// allPets.push("Shiro")
// 6
// allPets
// (6) ['Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt', 'Shiro']
// [...dogs, ...cats, "Speedy"]
// (6) ['Rusty', 'Wyatt', 'Blue', 'Scout', 'Rocket', 'Speedy']
// [1, 2, 3, ...dogs, ...cats, "Speedy"]
// (9) [1, 2, 3, 'Rusty', 'Wyatt', 'Blue', 'Scout', 'Rocket', 'Speedy']

["hello"]
// ["hello"]

// [..."hello"]
// (5)["h", "e", "l", "l", "o"]

const feline = {legs: 4, family: "Felidae"};
const canine = {isFurry: true, family: "Caninae"}


// {...feline}
// {legs: 4, family: 'Felidae'}
// feline
// {legs: 4, family: 'Felidae'}
// {...feline, color: "black"}
// {legs: 4, family: 'Felidae', color: 'black'}
// {...feline, ...canine}
// {legs: 4, family: 'Caninae', isFurry: true}
// {...canine, ...feline}
// {isFurry: true, family: 'Felidae', legs: 4}
// {...canine, ...feline, family:"Steele"}
// {isFurry: true, family: 'Steele', legs: 4}
// {...[2, 4, 6, 8]}
// {0: 2, 1: 4, 2: 6, 3: 8}
// {..."HIIII"}
// {0: 'H', 1: 'I', 2: 'I', 3: 'I', 4: 'I'}

const dataFromForm = {
    email: "blueman@gmail.com",
    password: "tobias123!",
    username: "tfunke"
}

const newUser = {...dataFromForm, id: 2345, isAdmin: false} 

// newUser
// {email: 'blueman@gmail.com', password: 'tobias123!', username: 'tfunke', id: 2345, isAdmin: false}