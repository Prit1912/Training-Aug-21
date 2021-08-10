use db1;

CREATE TABLE Departments
(
DepartmentId varchar(20) not null PRIMARY KEY,
DeptName varchar(20) not null,
)

CREATE TABLE employees
(
Employee_Id int not null PRIMARY KEY IDENTITY(1,1),
FirstName varchar(15) not null,
LastName varchar(15) not null,
Email varchar(50) not null constraint chk_email check (Email like '%_@__%.__%'),
phone Numeric(10) not null,
Hire_Date date not null,
JobId int not null,
Salary money not null,
Commission money not null,
Manager_Id varchar(10) not null,
DepartmentId varchar(20) not null,
CONSTRAINT fk_jobs FOREIGN KEY (JobId) REFERENCES jobs(JobId),
CONSTRAINT fk_dept FOREIGN KEY (DepartmentId) REFERENCES Departments(DepartmentId),
)