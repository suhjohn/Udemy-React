/*
Classes are for objects

Composed of properties and methods

Instantiaed with const

Supports inheritance
*/

class Gender{
    constructor(){
        this.gender = 'Female';
    }

    printGender(){
        console.log(this.gender);
    }
}

class Person extends Gender{
    constructor(){
        super();
        this.name = "Mary";
    }
    printName(){
        console.log(this.name);
    }
}


// ES7 Version

class Human{
    gender = "Male";

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human{
    name = 'Max';
    
    printName = () => {
        console.log(this.name);
    }
}

