// Store 5 Employee Data(ID,Name,City,DOJ) in one Array. Search the employee with ID.
// Search the employees who has joined after year 2020
// Search the employee who has joined after year 2020 and stays in Mumbai city


let empArray = [];

function addEmployee(Id:number,Name:string,City:string,Doj:string): void{
    let employee = {
        id: Id,
        name: Name,
        city: City,
        doj: Doj
    }
    empArray.push(employee);
}

addEmployee(1,'Prit','Navsari','2021-08-03');
addEmployee(2,'Man','Surat','2021-08-03');
addEmployee(3,'Tirth','Gandhinagar','2020-08-03');
addEmployee(4,'Raj','Ahmedabad','2021-08-03');
addEmployee(5,'Jay','Mumbai','2021-08-03');
addEmployee(6,'Smit','Mumbai','2021-08-03');


// search employee by id

function getEmployeeById(id: number): void{
    for(let employee of empArray){
        if(employee.id == id){
            console.log(employee);
            return;
        }
    }
    console.log('employee not found');
}

getEmployeeById(1);
getEmployeeById(10);



// search employee who has joined after year 2020

function getEmployeeByJoiningYear(year: number): void{
    let emps = empArray.filter((emp,i,arr)=>{
        let DOJ = new Date(emp.doj);
        let joiningYear = DOJ.getFullYear();
        return (joiningYear>year);
    })
    if(emps.length == 0){
        console.log('no data found');
        return;
    }
    console.log(emps);
}

getEmployeeByJoiningYear(2020);



// search employee who has joined after year 2020 and stays in mumbai

function searchByJoiningYearAndCity(year: number, city:string):void{
    let emps = empArray.filter((emp,i,arr)=>{
        let DOJ = new Date(emp.doj);
        let joiningYear = DOJ.getFullYear();
        return (joiningYear>year && emp.city == city);
    })
    if(emps.length == 0){
        console.log('no data found');
        return;
    }
    console.log(emps);
}

searchByJoiningYearAndCity(2020,'Mumbai')