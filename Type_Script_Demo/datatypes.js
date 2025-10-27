// let lname = 'bipul';
// lname = 10 // not possiable
let lname;
lname = "Bipul";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 26;
age = 26.4;
let dob = "24";
// let result = parseInt("34");
let result = parseInt(dob);
console.log(result);
let isvalid = false;
console.log(isvalid);
let emplist;
let dplist;
emplist = ["Bipul", "guchhait"];
let numlist;
numlist = [1, 2, 3, 4];
let results = numlist.filter((num) => num > 2);
let num = numlist.find((num) => num === 2);
let sum = numlist.reduce((acc, num) => acc + num);
console.log(results);
console.log(num);
console.log(sum);
// const enum Color {
//     red,
//     Green,
//     Blue
// }
// let c: Color = Color.Blue;
let swapNums;
function swapNumber(num1, num2) {
    return ([num2, num1]);
}
swapNums = swapNumber(10, 20);
console.log(swapNums[0]);
// console.log(swapNums[3]);
let datany;
datany = "IT";
datany = 2;
