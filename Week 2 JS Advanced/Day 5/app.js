
import { add } from "./math.js";

console.log(add(10, 20));


// Classes and this

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    showResult() {
        if (this.marks >= 50) {
            console.log(this.name + " Passed");
        } else {
            console.log(this.name + " Failed");
        }
    }
}

const studentOne = new Student("Ali", 85);
const studentTwo = new Student("Ahmed", 42);

studentOne.showResult();
studentTwo.showResult();


// Debugging Example

const firstNumber = 10;
const secondNumber = 20;

const sum = firstNumber + secondNumber;

console.log("Sum:", sum);
