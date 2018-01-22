
/* 
Spread
...
basically ** in python on steroids
*/

const number = [1,2,3];
const extendedNumber = [...number, 4];
console.log(extendedNumber); // [1,2,3,4]

const person = {
    name: 'Max'
}
const newPerson = {
    ...person,
    age: 28
}
console.log(newPerson); // {name:'Max', age:28}

/* 
Rest

*/
// here ...args essentially creates an array out of the args provided
const filter = (...args) => {
    return console.log(args.filter(el => el === 1))
}

