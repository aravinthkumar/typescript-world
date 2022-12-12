/* 
Generics
- Basics => Done
- Constraint => Done
- Generic Classes => Done
*/

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
const merger = merge({ name: "Aravinth", role: 1 }, { age: 30 });
console.log(merger);
console.log(merger.role);

interface Lengthy {
    length: number
}

function countAndComment<T extends Lengthy>(element: T): T {
    if (element.length === 1) {
        console.log("Element is " + element.length);
    } else if (element.length > 1) {
        console.log("Element is greater, it is " + element.length)
    } else {
        console.log("Element is zero, sorry")
    }
    return element
}

countAndComment(["sports", "cooking"]);
countAndComment("hello there");
countAndComment("");


class DataStorage<T> {
    private data: T[] = [];

    createItem(item: T) {
        this.data.push(item);
    }

    deleteItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data]
    }

    getType() {
        return typeof this.data[1]
    }

}

const stringDataStorage = new DataStorage<String>();
stringDataStorage.createItem("Hello");
stringDataStorage.createItem("Hi");
console.log("After creation for storage type: " + stringDataStorage.getType() + " and items are: " + stringDataStorage.getItems());

stringDataStorage.deleteItem("Hello");
console.log("After deletion " + stringDataStorage.getItems());


const numberDataStorage = new DataStorage<Number>();
numberDataStorage.createItem(1);
numberDataStorage.createItem(10);
console.log("After creation for storage type: " + numberDataStorage.getType() + " and items are: " + numberDataStorage.getItems());
numberDataStorage.deleteItem(1);
console.log("After deletion " + numberDataStorage.getItems());


