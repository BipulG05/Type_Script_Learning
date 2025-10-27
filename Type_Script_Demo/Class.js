var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        // private id!:number;
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    grtNameWithAddress() {
        // return this.name + " " + this.address
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee_id = new WeakMap();
// let bip = new Employee();
// bip.id =1;
// bip.name = 'John';
// bip.address = "smk kol"
let bip = new Employee(1, "bip", "smk kol");
let empDetails = bip.grtNameWithAddress();
console.log(bip);
console.log(empDetails);
// bip.id //private 
// bip.name //Protected
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let bipl = new Manager(2, "Bipl", "SMK KOL");
console.log(bipl.grtNameWithAddress());
// not possiable
// bip.getEmployeeCount() //static function
//  bipl.getEmployeeCount() //static function
console.log(Employee.getEmployeeCount());
console.log(bip.empId);
bip.empId = 101;
console.log(bip.empId);
console.log(bipl.empId);
bipl.empId = 102;
console.log(bipl.empId);
