"use strict";
function combine(input1, input2, resultType) {
    if ((typeof input1 === 'number') && (typeof input2 === 'number') || resultType === 'use-number') {
        return +input1 + +input2;
    }
    return input1.toString() + input2.toString();
}
const combineName = combine("Aravinth", "Darshini", 'use-string');
console.log(combineName);
const combineNumber = combine(1, 2, 'use-number');
console.log(combineNumber);
const pr1 = { title: 'A Book', price: 12.99, isListed: true };
console.log(pr1);
let u1 = { name: 'Max' };
u1 = 'Michael';
console.log(u1);
//# sourceMappingURL=union-and-types.js.map