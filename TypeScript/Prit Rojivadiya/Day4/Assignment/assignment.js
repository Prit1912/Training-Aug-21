// Store 5 Employee Data(ID,Name,City,DOJ) in one Array. Search the employee with ID.
// Search the employees who has joined after year 2020
// Search the employee who has joined after year 2020 and stays in Mumbai city
var empArray = [];
function addEmployee(Id, Name, City, Doj) {
    var employee = {
        id: Id,
        name: Name,
        city: City,
        doj: Doj
    };
    empArray.push(employee);
}
addEmployee(1, 'Prit', 'Navsari', '2021-08-03');
addEmployee(2, 'Man', 'Surat', '2021-08-03');
addEmployee(3, 'Tirth', 'Gandhinagar', '2020-08-03');
addEmployee(4, 'Raj', 'Ahmedabad', '2021-08-03');
addEmployee(5, 'Jay', 'Mumbai', '2021-08-03');
addEmployee(6, 'Smit', 'Mumbai', '2021-08-03');
// search employee by id
function getEmployeeById(id) {
    for (var _i = 0, empArray_1 = empArray; _i < empArray_1.length; _i++) {
        var employee = empArray_1[_i];
        if (employee.id == id) {
            console.log(employee);
            return;
        }
    }
    console.log('employee not found');
}
getEmployeeById(1);
getEmployeeById(10);
// search employee who has joined after year 2020
function getEmployeeByJoiningYear(year) {
    var emps = empArray.filter(function (emp, i, arr) {
        var DOJ = new Date(emp.doj);
        var joiningYear = DOJ.getFullYear();
        return (joiningYear > year);
    });
    if (emps.length == 0) {
        console.log('no data found');
        return;
    }
    console.log(emps);
}
getEmployeeByJoiningYear(2020);
// search employee who has joined after year 2020 and stays in mumbai
function searchByJoiningYearAndCity(year, city) {
    var emps = empArray.filter(function (emp, i, arr) {
        var DOJ = new Date(emp.doj);
        var joiningYear = DOJ.getFullYear();
        return (joiningYear > year && emp.city == city);
    });
    if (emps.length == 0) {
        console.log('no data found');
        return;
    }
    console.log(emps);
}
searchByJoiningYearAndCity(2020, 'Mumbai');
