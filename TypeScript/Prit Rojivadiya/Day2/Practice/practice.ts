export {}

// classes

class Employee{
    empCode: number;
    empName: string;

    constructor(code: number, name: string){
        this.empCode = code;
        this.empName = name;
    }

    getSalary(): number{
        return 25000;
    }
}

let emp1 = new Employee(101, 'Prit');
console.log(emp1);
console.log(emp1.getSalary());


// class inheritance
class Person_I {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

class Employee_I extends Person_I {
    empCode: number;
    
    constructor(empcode: number, name:string) {
        super(name);
        this.empCode = empcode;
    }
    
    displayName():void {
        console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
    }
}

let Iemp = new Employee_I(100, "Bill");
Iemp.displayName();


// get and set method
class getAndSet{
    private _name:string;

    get name():string{
        return this._name;
    }

    set name(newName:string){
        this._name = newName;
    }
}

let n = new getAndSet();
n.name = 'Prit'
console.log(n.name);


// tuple

let strNumPair:[string,number] = ['abc',124];
console.log(strNumPair);
console.log(strNumPair[0]);
console.log(strNumPair[1]);

var employees:[number,string][] = [
    [101,'Prit'],[102,'Man'],[103,'Tirth']
]
console.log(employees)



// union

let code:(string|number);
code = 111;
code = 'abc';
// code = true; // gives error

let emp: string | number;
emp = '111';
emp = 111;

console.log(code,emp);

function chkUnionType(val:(number | string)): void{
    if(typeof(val) == 'number'){
        console.log('data type is number');
    }else if(typeof(val) == 'string'){
        console.log('data type is string');
    }else{
        console.log('wrong data type');
    }
}

chkUnionType(124);
chkUnionType('abc');



// enum

enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
 }

let mediaType: PrintMedia = getMedia('Forbes');
console.log(mediaType);
console.log(typeof(mediaType));


// computed anum
enum printMedia {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 10
}

function getPrintMediaCode(mediaName: string): number {
    if (mediaName === 'newsletter') {
        return 5;
    }
}

console.log(printMedia.Newsletter); 
console.log(printMedia.Magazine); 


// string enum
enum printmedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum 
console.log(printmedia.Newspaper); 
console.log(printmedia['Magazine']);



// Heterogeneous Enum
enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
}

console.log(Status)
console.log(Status.Pending)
console.log(Status['Pending']) // reversed mapping
console.log(Status[2]) // reversed mapping



// interface

interface IEmployee{
    empCode: number;
    empName: string;
    getSalary: (number)=>number
}

class EmployeeData implements IEmployee {
    
    empCode: number;
    empName: string;
    constructor(code:number,name:string){
        this.empCode = code;
        this.empName = name;
    }

    getSalary(empCode: number):number{
        return 20000;
    }
}

let emp111 = new EmployeeData(111,'Prit');
console.log(emp111);
console.log(emp111.getSalary(111));


// interface as type
interface keyPair{
    key: number;
    value: string;
}

let kv1: keyPair = {key: 1, value:'a'};
console.log(typeof kv1);
console.log(kv1);


// interface as function type
interface KeyValueProcessor
{
    (key: number, value: string): void;
};

function addKeyValue(key:number, value:string):void { 
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill');
console.log(typeof kvp)



// interface as array type
interface NumList {
    [index:number]:number
}

let numArr: NumList = [1, 2, 3];
console.log(numArr[0]);
console.log(numArr[1]);

interface IStringList {
    [index:string]:string
}

let strArr : IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
console.log(typeof strArr);
console.log(strArr);



// optional property
interface iEmployee {
    empCode: number;
    empName: string;
    empDept?:string;
}

let empObj1:iEmployee = {   // OK
    empCode:1,
    empName:"Steve"
}

console.log(empObj1);



// read only property
interface Citizen {
    name: string;
    readonly SSN: number;
}

let personObj: Citizen  = { SSN: 110555444, name: 'James Bond' }

personObj.name = 'Steve Smith'; // OK
// personObj.SSN = '333666888'; // Compiler Error
console.log(personObj);



// extending interface
interface IPerson {
    name: string;
    gender: string;
}

interface iemployee extends IPerson {
    empCode: number;
}

let empObj:iemployee = {
    empCode:1,
    name:"Bill",
    gender:"Male"
}

console.log(empObj);



// functions

function Sum(x: number, y: number) : number {
    return x + y;
}

console.log(Sum(2,3)); 

// optional parameter in function
function Greet(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}

Greet('Hello','Steve'); //returns "Hello Steve!"
Greet('Hi'); //returns "Hi undefined!".
// Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.



// default parameter in function
function greet(greeting: string = "Hello", name: string) : string {
    return greeting + ' ' + name + '!';
}

console.log(greet(undefined, 'Steve')); //prints "Hello Steve!"
greet("Hi", 'Steve'); //returns "Hi Steve!".
greet(undefined, 'Bill'); //returns "Hello Bill!"



// function overloading
function add(a:string, b:string):string;

function add(a:number, b:number):number;

function add(a: any, b:any): any {
    return a + b;
}

console.log(add("Hello ", "Steve"));
console.log(add(10, 20)); 



// rest parameter
let greeting = (greeting: string, ...names: string[]) => {
    return greeting + " " + names.join(", ") + "!";
}

console.log(greeting("Hello", "Steve", "Bill"));
console.log(greeting("Hello"));


// function types
function publicationMessage(year: number):string{
    return 'Published year: '+year;
}

let publishFun: (year:number) => string;

publishFun = publicationMessage

let message: string = publishFun(2021);

console.log(message);