// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for(let i = 1; i <= 10; i++)
// {
//     console.log(i);
// }

// for(let i = 2; i <= 20; i += 2)
// {
//     console.log(i);
// }

for(let i = 100; i >= 0; i -= 10)
{
    console.log(i);
}

for(let i = 10; i <= 1000; i *= 10)
{
    console.log(i);
}

const animals = ["lions", "tigers", "bears"];

for(let i = 0; i < animals.length; i++)
{
    console.log(i, animals[i]);
}

for(let i = animals.length - 1; i >= 0; i--)
{
    console.log(i, animals[i]);
}

for(let i = 1; i <= 10; i++)
{
    console.log(`i is: ${i}`);
    for(let j = 1; j < 4; j++)
    {
        console.log(`     j is: ${j}`);
    }
}

const seatingChart = [
    ["Kristen", "Erik", "Namita"],
    ["Geoffrey", "Juanita", "Antonio", "Kevin"],
    ["Yuma", "Sakura", "Jack", "Erika"]
]

for(let i = 0; i < seatingChart.length; i++)
{
    console.log(seatingChart[i]);
}

for(let i = 0; i < seatingChart.length; i++)
{
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for(let j = 0; j < row.length; j++)
    {
        console.log(row[j]);
    }
}

// 1
// forLoop.js:14 2
// forLoop.js:14 3
// forLoop.js:14 4
// forLoop.js:14 5
// forLoop.js:14 6
// forLoop.js:14 7
// forLoop.js:14 8
// forLoop.js:14 9
// forLoop.js:14 10
// forLoop.js:19 2
// forLoop.js:19 4
// forLoop.js:19 6
// forLoop.js:19 8
// forLoop.js:19 10
// forLoop.js:19 12
// forLoop.js:19 14
// forLoop.js:19 16
// forLoop.js:19 18
// forLoop.js:19 20
// forLoop.js:24 100
// forLoop.js:24 90
// forLoop.js:24 80
// forLoop.js:24 70
// forLoop.js:24 60
// forLoop.js:24 50
// forLoop.js:24 40
// forLoop.js:24 30
// forLoop.js:24 20
// forLoop.js:24 10
// forLoop.js:24 0
// forLoop.js:29 10
// forLoop.js:29 100
// forLoop.js:29 1000
// forLoop.js:36 0 'lions'
// forLoop.js:36 1 'tigers'
// forLoop.js:36 2 'bears'
// forLoop.js:41 2 'bears'
// forLoop.js:41 1 'tigers'
// forLoop.js:41 0 'lions'
// forLoop.js:46 i is: 1
// forLoop.js:49      j is: 1
// forLoop.js:49      j is: 2
// forLoop.js:49      j is: 3
// forLoop.js:46 i is: 2
// forLoop.js:49      j is: 1
// forLoop.js:49      j is: 2
// forLoop.js:49      j is: 3
// forLoop.js:46 i is: 3
// forLoop.js:49      j is: 1
// forLoop.js:49      j is: 2
// forLoop.js:49      j is: 3
// forLoop.js:46 i is: 4
// forLoop.js:49      j is: 1
// forLoop.js:49      j is: 2
// forLoop.js:49      j is: 3
// forLoop.js:46 i is: 5
// forLoop.js:49      j is: 1
// forLoop.js:49      j is: 2
// forLoop.js:49      j is: 3
// forLoop.js:46 i is: 6
// forLoop.js:49      j is: 1
// forLoop.js:49      j is: 2
// forLoop.js:49      j is: 3
// forLoop.js:46 i is: 7
// forLoop.js:49      j is: 1
// forLoop.js:49      j is: 2
// forLoop.js:49      j is: 3
// forLoop.js:46 i is: 8
// forLoop.js:49      j is: 1
// forLoop.js:49      j is: 2
// forLoop.js:49      j is: 3
// forLoop.js:46 i is: 9
// forLoop.js:49      j is: 1
// forLoop.js:49      j is: 2
// forLoop.js:49      j is: 3
// forLoop.js:46 i is: 10
// forLoop.js:49      j is: 1
// forLoop.js:49      j is: 2
// forLoop.js:49      j is: 3
// forLoop.js:61 (3) ['Kristen', 'Erik', 'Namita']
// forLoop.js:61 (4) ['Geoffrey', 'Juanita', 'Antonio', 'Kevin']
// forLoop.js:61 (4) ['Yuma', 'Sakura', 'Jack', 'Erika']
// forLoop.js:67 ROW #1
// forLoop.js:70 Kristen
// forLoop.js:70 Erik
// forLoop.js:70 Namita
// forLoop.js:67 ROW #2
// forLoop.js:70 Geoffrey
// forLoop.js:70 Juanita
// forLoop.js:70 Antonio
// forLoop.js:70 Kevin
// forLoop.js:67 ROW #3
// forLoop.js:70 Yuma
// forLoop.js:70 Sakura
// forLoop.js:70 Jack
// forLoop.js:70 Erika