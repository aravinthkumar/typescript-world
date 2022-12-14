"use strict";
class Calculator {
    constructor(params1, params2, disRes, id) {
        this.id = id;
        this.parameter1 = params1;
        this.parameter2 = params2;
        this.displayResult = disRes;
    }
    add() {
        if (this.displayResult) {
            console.log("provider print: addition = " + (this.parameter1 + this.parameter2));
        }
        return this.parameter1 + this.parameter2;
    }
    sub() {
        if (this.displayResult) {
            console.log("provider print: subtraction = " + (this.parameter1 - this.parameter2));
        }
        return this.parameter1 - this.parameter2;
    }
    multiply() {
        if (this.displayResult) {
            console.log("provider print: multiply = " + this.parameter1 * this.parameter2);
        }
        return this.parameter1 * this.parameter2;
    }
    div() {
        if (this.displayResult) {
            console.log("provider print: division = " + this.parameter1 / this.parameter2);
        }
        return this.parameter1 / this.parameter2;
    }
}
const p1 = 2;
const p2 = 2;
const calc = new Calculator(2, 2, false, "1");
console.log("consumer print: addition = " + calc.add());
console.log("consumer print: addition = " + calc.sub());
console.log("consumer print: addition = " + calc.multiply());
console.log("consumer print: addition = " + calc.div());
const calc2 = new Calculator(4, 2, true, "2");
calc2.add();
calc2.sub();
calc2.multiply();
calc2.div();
//# sourceMappingURL=calculator.js.map