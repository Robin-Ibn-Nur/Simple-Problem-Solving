/*
Write an arrow function that will take 3 parameters, will multiply 
the parameters and will return the result.
*/

const arrow = (a, b, c) => {
    return a * b * c;
}
// console.log(arrow(2,4,6))

/*
Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.
*/
const firstLine = 'I am a web developer.';
const secondLine = 'I love to code.';
const thirdLine = 'I love to eat biryani.';
// const result = `${firstLine} ${secondLine} ${thirdLine}`
// console.log(result);

/*
Write an arrow function that will take 2 parameters: One parameter 
will come from you and the other parameter will be a default 
parameter. Add these two parameters and return the result.
*/

const defaultParemeters = (a, b = 2) => a + b;
// console.log(defaultParemeters(2));

/*
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the 
name of your friends
b) Check if the length of each element is even, push elements 
with even length to a new array and return the result
*/


// const array = ['robin', 'bobin', 'tobin', 'janu', 'sona', 'pakhi']
// const even = []
// const friendsName = array.map(x => {
//     // console.log(x.length);
//     if (x.length / 2) {
//         // console.log(x, x.length);
//         const result = even.push(x)

//     }

//     // console.log(x.length / 2);
// })

const arr = ['a', 'b', 'c', 'd'];
const mod = arr.splice(1, 2, 'z');
// console.log(arr);
// console.log(mod);


const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
// console.log(output);
const product = { name: 'Laptop', model: 'Yoga 3', price: 49000, dusk: '512SSD' }
const { price } = product;
//console.log(price);

// const isTrue = 'false';
// if (!isTrue) {
//     console.log('hello');
// } else {
//     console.log('world');
// }
function sum(p, q) {
    p + q;
}
const result = sum(2, 3);
console.log(result);

