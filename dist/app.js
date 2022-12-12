"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merger = merge({ name: "Aravinth", role: 1 }, { age: 30 });
console.log(merger);
console.log(merger.role);
function countAndComment(element) {
    if (element.length === 1) {
        console.log("Element is " + element.length);
    }
    else if (element.length > 1) {
        console.log("Element is greater, it is " + element.length);
    }
    else {
        console.log("Element is zero, sorry");
    }
    return element;
}
countAndComment(["sports", "cooking"]);
countAndComment("hello there");
countAndComment("");
class DataStorage {
    constructor() {
        this.data = [];
    }
    createItem(item) {
        this.data.push(item);
    }
    deleteItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
    getType() {
        return typeof this.data[1];
    }
}
const stringDataStorage = new DataStorage();
stringDataStorage.createItem("Hello");
stringDataStorage.createItem("Hi");
console.log("After creation for storage type: " + stringDataStorage.getType() + " and items are: " + stringDataStorage.getItems());
stringDataStorage.deleteItem("Hello");
console.log("After deletion " + stringDataStorage.getItems());
const numberDataStorage = new DataStorage();
numberDataStorage.createItem(1);
numberDataStorage.createItem(10);
console.log("After creation for storage type: " + numberDataStorage.getType() + " and items are: " + numberDataStorage.getItems());
numberDataStorage.deleteItem(1);
console.log("After deletion " + numberDataStorage.getItems());
//# sourceMappingURL=app.js.map