class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

module.exports = Person;

const person1 = new Person('David', 24);

//user path built-in function to get around delimiters, instead of using strings to customize paths.
console.log(__dirname, __filename);

person1.greeting();