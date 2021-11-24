"use strict";
exports.__esModule = true;
// generic
function display(arg1) {
    console.log(typeof (arg1));
}
display(5);
display('abc');
display(true);
// multiple type variables
function displayMultiple(arg1, arg2) {
    console.log("".concat(typeof (arg1), " , ").concat(typeof (arg2)));
}
displayMultiple(5, 'Prit');
// generic array method
function displayNames(names) {
    console.log(names.join(", "));
}
displayNames(["Jay", "Raj"]);
// generic constraints
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    return Person;
}());
function displayPerson(per) {
    console.log("".concat(per.firstName, " ").concat(per.lastName));
}
var per = new Person("Prit", "Rojivadiya");
displayPerson(per);
var kv1 = { key: 1, value: "Steve" };
var kv2 = { key: 1, value: 12345 };
console.log(kv1, kv2);
;
function processKeyPairs(key, value) {
    console.log("processKeyPairs: key = ".concat(key, ", value = ").concat(value));
}
var numKVProcessor = processKeyPairs;
numKVProcessor(1, 12345);
;
var kvProcessor = /** @class */ (function () {
    function kvProcessor() {
    }
    kvProcessor.prototype.process = function (key, val) {
        console.log("Key = ".concat(key, ", val = ").concat(val));
    };
    return kvProcessor;
}());
var proc = new kvProcessor();
proc.process(1, 'Bill');
// generic class
var KeyValuePair1 = /** @class */ (function () {
    function KeyValuePair1() {
    }
    KeyValuePair1.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair1.prototype.display = function () {
        console.log("Key = ".concat(this.key, ", val = ").concat(this.val));
    };
    return KeyValuePair1;
}());
var kvp1 = new KeyValuePair1();
kvp1.setKeyValue(111, "Prit");
kvp1.display();
// namespace
var StringUtility;
(function (StringUtility) {
    function ToCapital(str) {
        return str.toUpperCase();
    }
    StringUtility.ToCapital = ToCapital;
    function SubString(str, from, length) {
        if (length === void 0) { length = 0; }
        return str.substr(from, length);
    }
    StringUtility.SubString = SubString;
})(StringUtility || (StringUtility = {}));
