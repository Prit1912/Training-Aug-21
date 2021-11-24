export {}

// generic

function display<T>(arg1:T): void{
    console.log(typeof(arg1));
}

display<number>(5);
display<string>('abc');
display<boolean>(true);


// multiple type variables

function displayMultiple<P,Q>(arg1:P,arg2:Q): void{
    console.log(`${typeof(arg1)} , ${typeof(arg2)}`);
}

displayMultiple<number,string>(5,'Prit');


// generic array method

function displayNames<T>(names:T[]): void { 
    console.log(names.join(", "));  
}

displayNames<string>(["Jay", "Raj"]);



// generic constraints

class Person {
    firstName: string;
    lastName: string;

    constructor(fname:string,  lname:string) { 
        this.firstName = fname;
        this.lastName = lname;
    }
}

function displayPerson<T extends Person>(per: T): void {
    console.log(`${ per.firstName} ${per.lastName}` );
}
var per = new Person("Prit", "Rojivadiya");
displayPerson(per); 



// generic interface as type

interface KeyPair<T, U> {
    key: T;
    value: U;
}

let kv1: KeyPair<number, string> = { key:1, value:"Steve" }; 
let kv2: KeyPair<number, number> = { key:1, value:12345 }; 

console.log(kv1,kv2);



// generic interface as function type

interface KeyValueProcessor<T, U>
{
    (key: T, val: U): void;
};

function processKeyPairs<T, U>(key:T, value:U):void { 
    console.log(`processKeyPairs: key = ${key}, value = ${value}`)
}

let numKVProcessor: KeyValueProcessor<number, number> = processKeyPairs;
numKVProcessor(1, 12345); 
// processKeyPairs(1,'Prit'); 



// generic class implements generic interface

interface IKeyValueProcessor<T, U>
{
    process(key: T, val: U): void;
};

class kvProcessor<T,U> implements IKeyValueProcessor<T, U>
{ 
    process(key:T, val:U):void { 
        console.log(`Key = ${key}, val = ${val}`);
    }
}

let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'Bill'); 


// generic class

class KeyValuePair1<T,U>
{ 
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U): void { 
        this.key = key;
        this.val = val;
    }

    display():void { 
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair1<number, string>();
kvp1.setKeyValue(111, "Prit");
kvp1.display(); 



