// classes
class Employee {
    constructor(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    getSalary() {
        return 25000;
    }
}
let emp1 = new Employee(101, 'Prit');
console.log(emp1);
console.log(emp1.getSalary());
// class inheritance
class Person_I {
    constructor(name) {
        this.name = name;
    }
}
class Employee_I extends Person_I {
    constructor(empcode, name) {
        super(name);
        this.empCode = empcode;
    }
    displayName() {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    }
}
let Iemp = new Employee_I(100, "Bill");
Iemp.displayName();
// get and set method
class getAndSet {
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
let n = new getAndSet();
n.name = 'Prit';
console.log(n.name);
// tuple
let strNumPair = ['abc', 124];
console.log(strNumPair);
console.log(strNumPair[0]);
console.log(strNumPair[1]);
var employees = [
    [101, 'Prit'], [102, 'Man'], [103, 'Tirth']
];
console.log(employees);
// union
let code;
code = 111;
code = 'abc';
// code = true; // gives error
let emp;
emp = '111';
emp = 111;
console.log(code, emp);
function chkUnionType(val) {
    if (typeof (val) == 'number') {
        console.log('data type is number');
    }
    else if (typeof (val) == 'string') {
        console.log('data type is string');
    }
    else {
        console.log('wrong data type');
    }
}
chkUnionType(124);
chkUnionType('abc');
// enum
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
}
let mediaType = getMedia('Forbes');
console.log(mediaType);
console.log(typeof (mediaType));
// computed anum
var printMedia;
(function (printMedia) {
    printMedia[printMedia["Newspaper"] = 1] = "Newspaper";
    printMedia[printMedia["Newsletter"] = getPrintMediaCode('newsletter')] = "Newsletter";
    printMedia[printMedia["Magazine"] = printMedia.Newsletter * 3] = "Magazine";
    printMedia[printMedia["Book"] = 10] = "Book";
})(printMedia || (printMedia = {}));
function getPrintMediaCode(mediaName) {
    if (mediaName === 'newsletter') {
        return 5;
    }
}
console.log(printMedia.Newsletter);
console.log(printMedia.Magazine);
// string enum
var printmedia;
(function (printmedia) {
    printmedia["Newspaper"] = "NEWSPAPER";
    printmedia["Newsletter"] = "NEWSLETTER";
    printmedia["Magazine"] = "MAGAZINE";
    printmedia["Book"] = "BOOK";
})(printmedia || (printmedia = {}));
// Access String Enum 
console.log(printmedia.Newspaper);
console.log(printmedia['Magazine']);
// Heterogeneous Enum
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Deactivate"] = 1] = "Deactivate";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
console.log(Status);
console.log(Status.Pending);
console.log(Status['Pending']); // reversed mapping
console.log(Status[2]); // reversed mapping
class EmployeeData {
    constructor(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    getSalary(empCode) {
        return 20000;
    }
}
let emp111 = new EmployeeData(111, 'Prit');
console.log(emp111);
console.log(emp111.getSalary(111));
let kv1 = { key: 1, value: 'a' };
console.log(typeof kv1);
console.log(kv1);
;
function addKeyValue(key, value) {
    console.log('addKeyValue: key = ' + key + ', value = ' + value);
}
let kvp = addKeyValue;
kvp(1, 'Bill');
console.log(typeof kvp);
let numArr = [1, 2, 3];
console.log(numArr[0]);
console.log(numArr[1]);
let strArr = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
console.log(typeof strArr);
console.log(strArr);
let empObj1 = {
    empCode: 1,
    empName: "Steve"
};
console.log(empObj1);
let personObj = { SSN: 110555444, name: 'James Bond' };
personObj.name = 'Steve Smith'; // OK
// personObj.SSN = '333666888'; // Compiler Error
console.log(personObj);
let empObj = {
    empCode: 1,
    name: "Bill",
    gender: "Male"
};
console.log(empObj);
// functions
function Sum(x, y) {
    return x + y;
}
console.log(Sum(2, 3));
// optional parameter in function
function Greet(greeting, name) {
    return greeting + ' ' + name + '!';
}
Greet('Hello', 'Steve'); //returns "Hello Steve!"
Greet('Hi'); //returns "Hi undefined!".
// Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.
// default parameter in function
function greet(greeting = "Hello", name) {
    return greeting + ' ' + name + '!';
}
console.log(greet(undefined, 'Steve')); //prints "Hello Steve!"
greet("Hi", 'Steve'); //returns "Hi Steve!".
greet(undefined, 'Bill'); //returns "Hello Bill!"
function add(a, b) {
    return a + b;
}
console.log(add("Hello ", "Steve"));
console.log(add(10, 20));
// rest parameter
let greeting = (greeting, ...names) => {
    return greeting + " " + names.join(", ") + "!";
};
console.log(greeting("Hello", "Steve", "Bill"));
console.log(greeting("Hello"));
// function types
function publicationMessage(year) {
    return 'Published year: ' + year;
}
let publishFun;
publishFun = publicationMessage;
let message = publishFun(2021);
console.log(message);
