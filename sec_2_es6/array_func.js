/*

    By using map and function inside, we can do things to arrays
    This is actually from ES6.

    Also filter(), and reduce() are available on JS. 
    findIndex(), concat(), slice(), splice() all should be examined
    as they are often used in js development. 
*/

const numbers = [1,2,3];
const doubleNumbers = numbers.map((n) => {
    return n * 2;
});

console.log(numbers); // [1,2,3]
console.log(doubleNumbers); // [2,4,6]