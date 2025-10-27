// normal or name function
function add (num1 :number,num2:number) : number
{
    return num1 + num2
}
console.log(add(22,23))

//Arrow function
const sub = (num1:number, num2:number) : number => num1 - num2
console.log(sub(22,23))

// function expression
const mult = function(num1:number, num2:number) : number {
    return num1 * num2
}

console.log(mult(22,23))


// normal or name function with optional parameter
function addopt (num1 :number,num2:number,num3?:number) : number
{
    return num3? num1 + num2 + num3 : num1 + num2
}
console.log(addopt(22,23))
console.log(addopt(22,23,10))

// normal or name function with N numbers of array
function addNnumber (num1 :number,num2:number,...num3:number[]) : number
{
    return num1 + num2 + num3.reduce((a,b)=> a+b,0)
}
let numadd = [5,6,7]
console.log(addNnumber(22,23,...numadd))
console.log(addNnumber(22,23,...[10,1,1]))
console.log(addNnumber(22,23,5,6,7))

function getitems<Type>(item:Type[]) : Type[]{
    return new Array<Type>().concat(item)
}

let concatResult = getitems<number>([1,2,3,54,5,5]);
console.log(concatResult)

let concatstring = getitems<string>(["b","i","p","u","l"])
console.log(concatstring)
