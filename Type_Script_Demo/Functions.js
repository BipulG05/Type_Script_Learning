// normal or name function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(22, 23));
//Arrow function
const sub = (num1, num2) => num1 - num2;
console.log(sub(22, 23));
// function expression
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(22, 23));
// normal or name function with optional parameter
function addopt(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(addopt(22, 23));
console.log(addopt(22, 23, 10));
// normal or name function with N numbers of array
function addNnumber(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numadd = [5, 6, 7];
console.log(addNnumber(22, 23, ...numadd));
console.log(addNnumber(22, 23, ...[10, 1, 1]));
console.log(addNnumber(22, 23, 5, 6, 7));
function getitems(item) {
    return new Array().concat(item);
}
let concatResult = getitems([1, 2, 3, 54, 5, 5]);
console.log(concatResult);
let concatstring = getitems(["b", "i", "p", "u", "l"]);
console.log(concatstring);
