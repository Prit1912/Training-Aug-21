"use strict";
exports.__esModule = true;
/*
Store 5 employees’ data in one array (ID,FirstName,LastName,Address,Salary).
Do the operation searching by indexnumber, EmployeeID, Insert the employee, delete the employee
from the Array. Create one more array emp and join the value with above array.
When display list combine firstname and lastname as fullname,
From the address field flatnumber,city,state and should be splited.
PF should be computed and total salary should be display.
 */
var empData = [
    { id: 1, fname: 'Prit', lname: 'Rojivadiya', address: '306, Sainath Complex, Shantadevi Road, Navsari, Gujarat', salary: 25000 },
    { id: 2, fname: 'Man', lname: 'Patel', address: '307, Ganga Complex, MG Road, Ahmedabad, Gujarat', salary: 30000 },
    { id: 3, fname: 'Tirth', lname: 'Kaneriya', address: '304, Mangalam Complex, Maharaja Road, Surat, Gujarat', salary: 20000 },
    { id: 4, fname: 'Krusha', lname: 'Parekh', address: '303, Shraddha Complex, Grid Road, Gandhinagar, Gujarat', salary: 23000 },
    { id: 5, fname: 'Raj', lname: 'Parmar', address: '302, Sahil Complex, Flex Road, Rajkot, Gujarat', salary: 27000 }
];
// search by index number
console.log(empData[0]);
// search by id
for (var _i = 0, empData_1 = empData; _i < empData_1.length; _i++) {
    var emp_1 = empData_1[_i];
    if (emp_1.id == 1) {
        console.log(emp_1);
        break;
    }
}
// insert employee
empData.push({ id: 6, fname: 'Jay', lname: 'Parmar', address: '301, Sahil Complex, Malhar Road, Vadodara, Gujarat', salary: 26000 });
console.log(empData);
// delete employee by id
var index = 0;
for (var emp_2 in empData) {
    if (empData[emp_2].id == 4) {
        console.log(emp_2);
        index = parseInt(emp_2);
        break;
    }
}
empData.splice(index, 1);
console.log(empData);
// create new array
var emp = [
    { id: 7, fname: 'vijay', lname: 'pathak', address: '300, Abhi Complex, Vihar Road, Bhavnagar, Gujarat', salary: 25500 },
    { id: 8, fname: 'magnus', lname: 'carlsen', address: '310, My Complex, GM Road, Valsad, Gujarat', salary: 26500 }
];
// concat with previous array
var newArray = empData.concat(emp);
console.log(newArray);
// display all emp data
for (var i = 0; i < newArray.length; i++) {
    var emp_3 = newArray[i];
    console.log("id: ".concat(emp_3.id, " --- fullname: ").concat(emp_3.fname, " ").concat(emp_3.lname, " --- address: ").concat(emp_3.address.split(', '), " --- salary: ").concat(emp_3.salary, " --- PF: ").concat(emp_3.salary * 0.12));
}
