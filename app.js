console.log("This compile the TS file for now");
function add(number1, number2) {
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        console.log(typeof number1);
        return number1 + number2;
    }
    else {
        throw console.error("Not a number");
    }
}
var result = add(5, "2");
console.log(result);
