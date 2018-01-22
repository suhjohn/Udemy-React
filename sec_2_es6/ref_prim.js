/* 
Primitive types actually exist.

Array and objects are reference types.
*/

const person = {
    name: "Max"
};

const secondPerson = person;

person.name = 'John';
console.log(secondPerson); // [object Ojbect]{name: "John"}

// Be careful in copying variables. 
// Deepcopy can be done with spread

const person = {
    name: "Max"
};
const secondPerson = {
    ...person
};
person.name = 'John';
console.log(secondPerson); // [object Ojbect]{name: "Max"}
