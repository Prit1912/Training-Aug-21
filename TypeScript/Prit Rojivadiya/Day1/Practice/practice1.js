"use strict";
exports.__esModule = true;
// data types
// static
var n1 = 10;
console.log(n1);
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal, hex, binary, octal);
// number methods
console.log(decimal.toExponential());
console.log(decimal.toFixed(2));
console.log(decimal.toPrecision(2));
console.log(decimal.toString());
console.log(6e+0.valueOf());
// void
function greet() {
    console.log('hello user');
}
greet();
// string
var fname = 'Prit';
var lname = 'Rojivadiya';
console.log("".concat(fname, " ").concat(lname));
// string methods
console.log(fname.charAt(0));
console.log(fname.concat(lname));
console.log(fname.indexOf('y'));
console.log(fname.replace('t', 'i'));
console.log(fname.toUpperCase());
console.log(fname.charCodeAt(0));
console.log(fname.includes('it'));
console.log(fname.endsWith('it'));
console.log(fname.localeCompare('Pritppppppppppp'));
console.log(fname.localeCompare('Prit'));
console.log(fname.localeCompare('pppppppPrit'));
console.log(fname.match('it'));
// null
var a = null;
var b = null;
a = 8;
console.log(a, b);
// boolean
var t = true;
var f = false;
console.log(t, f);
// any
function add(x, y) {
    console.log(x + y);
}
add('abc', 4);
add('abc', 'def');
add(5, 4);
add(true, false); // output 1 // value of true is 1 and for false it is 0
add(true, true); // output 2
add(true, 2); // output 3
// array
var list1 = ['a', 'b', 'c'];
console.log(list1);
var list2 = [5, 2, 3, 4];
console.log(list2);
var list3 = ['a', 1, 3, 'b', 'c'];
console.log(list3);
for (var _i = 0, list1_1 = list1; _i < list1_1.length; _i++) {
    var l = list1_1[_i];
    console.log(l);
}
for (var i in list1) {
    console.log(list1[i]);
}
// array methods
list2.pop();
console.log(list2);
console.log(list2.push(4));
console.log(list2.sort());
console.log(list2.indexOf(2));
console.log(list3.copyWithin(0, 3, 4)); // copy to index 0 element at 3
console.log(list3.copyWithin(0, 1)); // copy to index 0 from index 1 to end
console.log(list3.copyWithin(0, 2, 5)); // copy to index 0 from element at 2,3
console.log(list1.fill('X', 1, 2));
console.log(list1.fill('X'));
console.log(list1.shift());
var newList2 = list2.filter(function (value, i, arr) {
    console.log(value);
    console.log(i);
    console.log(arr);
    return value > 3;
});
console.log(newList2);
