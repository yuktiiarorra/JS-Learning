const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer", "gunner"];

// for(let i = 0; i < subreddits.length; i++)
// {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

for(subreddit of subreddits)
{
    console.log(`Visit reddit.com/r/${subreddit}`);
}
// Visit reddit.com/r/cringe
// forOfLoop.js:10 Visit reddit.com/r/books
// forOfLoop.js:10 Visit reddit.com/r/chickens
// forOfLoop.js:10 Visit reddit.com/r/funny
// forOfLoop.js:10 Visit reddit.com/r/pics
// forOfLoop.js:10 Visit reddit.com/r/soccer
// forOfLoop.js:10 Visit reddit.com/r/gunner

const seatingChart = [
    ["Kristen", "Erik", "Namita"],
    ["Geoffrey", "Juanita", "Antonio", "Kevin"],
    ["Yuma", "Sakura", "Jack", "Erika"]
]

for(let row of seatingChart)
{
    for(let student of row)
    {
        console.log(student);
    }
}

for(char of "hello world")
{
    console.log(char);
}

// cringe
// forOfLoop.js:5 books
// forOfLoop.js:5 chickens
// forOfLoop.js:5 funny
// forOfLoop.js:5 pics
// forOfLoop.js:5 soccer
// forOfLoop.js:5 gunner
// forOfLoop.js:18 Kristen
// forOfLoop.js:18 Erik
// forOfLoop.js:18 Namita
// forOfLoop.js:18 Geoffrey
// forOfLoop.js:18 Juanita
// forOfLoop.js:18 Antonio
// forOfLoop.js:18 Kevin
// forOfLoop.js:18 Yuma
// forOfLoop.js:18 Sakura
// forOfLoop.js:18 Jack
// forOfLoop.js:18 Erika
// forOfLoop.js:24 h
// forOfLoop.js:24 e
// 2 l
// forOfLoop.js:24 o
// forOfLoop.js:24  
// forOfLoop.js:24 w
// forOfLoop.js:24 o
// forOfLoop.js:24 r
// forOfLoop.js:24 l
// forOfLoop.js:24 d

