class Employee {

    // private id!:number;
    #id!:number;
    protected name!:string;
    address!:string;

    set empId(id:number){
        this.#id = id;
    }
    get empId() : number{
        return this.#id;
    }

    static getEmployeeCount() : number {
        return 50;
    }

    constructor(id:number,name:string,address:string){
        this.#id =id;
        this.name = name;
        this.address = address
    }
    grtNameWithAddress():string{
        // return this.name + " " + this.address
        return `${this.name} stays at ${this.address}`
    }
}

// let bip = new Employee();
// bip.id =1;
// bip.name = 'John';
// bip.address = "smk kol"

let bip = new Employee(1,"bip","smk kol");
let empDetails = bip.grtNameWithAddress()
console.log(bip)
console.log(empDetails)

// bip.id //private 
// bip.name //Protected

class Manager extends Employee{
    constructor(id:number,name:string,address:string){
        super(id,name,address)
    }
}


let bipl = new Manager(2,"Bipl","SMK KOL")

console.log(bipl.grtNameWithAddress())

// not possiable
// bip.getEmployeeCount() //static function
//  bipl.getEmployeeCount() //static function

console.log(Employee.getEmployeeCount())
console.log(bip.empId)
bip.empId = 101;
console.log(bip.empId)

console.log(bipl.empId)
bipl.empId = 102;
console.log(bipl.empId)


