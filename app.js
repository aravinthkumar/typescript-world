console.log("This compile the TS file for now");
var n1 = 5;
var n3 = "6";
var n4 = true;
var n2 = 2;
var result = add(n1, n2);
console.log(result);
function add(number1, number2) {
    return number1 + number2;
}
;
var Calculator = /** @class */ (function () {
    function Calculator(params1, params2, disRes) {
        this.parameter1 = params1;
        this.parameter2 = params2;
        this.displayResult = disRes;
    }
    Calculator.prototype.add = function () {
        if (this.displayResult) {
            console.log("provider print: addition = " + (this.parameter1 + this.parameter2));
        }
        return this.parameter1 + this.parameter2;
    };
    Calculator.prototype.sub = function () {
        if (this.displayResult) {
            console.log("provider print: subtraction = " + (this.parameter1 - this.parameter2));
        }
        return this.parameter1 - this.parameter2;
    };
    Calculator.prototype.multiply = function () {
        if (this.displayResult) {
            console.log("provider print: multiply = " + this.parameter1 * this.parameter2);
        }
        return this.parameter1 * this.parameter2;
    };
    Calculator.prototype.div = function () {
        if (this.displayResult) {
            console.log("provider print: division = " + this.parameter1 / this.parameter2);
        }
        return this.parameter1 / this.parameter2;
    };
    return Calculator;
}());
var p1 = 2;
var p2 = 2;
var calc = new Calculator(2, 2, false);
console.log("consumer print: addition = " + calc.add());
console.log("consumer print: addition = " + calc.sub());
console.log("consumer print: addition = " + calc.multiply());
console.log("consumer print: addition = " + calc.div());
var calc2 = new Calculator(4, 2, true);
calc2.add();
calc2.sub();
calc2.multiply();
calc2.div();
var person = {
    name: "Aravinth",
    age: 30,
    healthMeasurement: {
        bloodPressure: "129/80",
        temperature: 98,
        temperatureDate: 12122022
    }
};
console.log(person);
