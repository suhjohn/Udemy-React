
/* 
    Keeps code shorter. Also scope of `this` is limited.

function callMe(name){
    console.log(name);
}

const callMe = function(name){
    console.log(name);
}

const callMe = (name) => {
    console.log(name);
}
*/

function printMyName(name){
    console.log(name);
}
printMyName('Max');

// No more issues with `this` keyword
const myFnc = (name) => {
    console.log(name);
}

// If no arguments, must pass empty paranthesis
const myFnc = () => {
    console.log("empy name");
}


// Can omit return if there's only return
const multiply = number => number *2;
