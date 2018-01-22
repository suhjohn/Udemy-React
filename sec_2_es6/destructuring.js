
/* 
Destructuring

Allow "Single" elements from array or object
    to be pulled out
    
*/

const numbers = [1,2,3];
[one, two] = numbers;

console.log(one); // 1
console.log(two); // 2

[one, , three] = numbers;
console.log(three); // 3