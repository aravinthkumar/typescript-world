// union and literals
function combine(input1: number|string,input2: number|string,resultType : 'use-number'|'use-string' ){
    if ((typeof input1 === 'number') &&  (typeof input2 === 'number') || resultType === 'use-number' ){
    return +input1 + +input2
    }
    return input1.toString() + input2.toString();
}

const combineName = combine("Aravinth","Darshini",'use-string');
console.log(combineName);

const combineNumber = combine(1,2,'use-number');
console.log(combineNumber);

//Type alias
type Product = {title: string; price: number; isListed: boolean};
const pr1: Product = { title: 'A Book', price: 12.99, isListed: true }
console.log(pr1)

type User = { name: string } | string;
let u1: User = {name: 'Max'};
u1 = 'Michael';
console.log(u1);