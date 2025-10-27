// let lname = 'bipul';
// lname = 10 // not possiable
let lname : string;

lname = "Bipul";

let newname = lname.toUpperCase();

console.log(newname);


let age : number;

age = 26;

age = 26.4;

let dob = "24";
// let result = parseInt("34");
let result = parseInt(dob);

console.log(result)


let isvalid : boolean = false;

console.log(isvalid)


let emplist : string[];

let dplist :Array<string>;

emplist = ["Bipul","guchhait"]


let numlist :Array<number>;

numlist = [1,2,3,4]


let results = numlist.filter((num)=> num > 2)
let num = numlist.find((num)=> num === 2)


let sum = numlist.reduce((acc,num) => acc + num);

console.log(results)
console.log(num)
console.log(sum)

// const enum Color {
//     red,
//     Green,
//     Blue
// }

// let c: Color = Color.Blue;

let swapNums : [number,number];

function swapNumber(num1, num2) : [number,number]{
    return([num2,num1])
}

swapNums= swapNumber(10,20)

console.log(swapNums[0]);
// console.log(swapNums[3]);

let datany : any;

datany = "IT";
datany = 2




