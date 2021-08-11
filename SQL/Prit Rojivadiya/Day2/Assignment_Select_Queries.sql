SELECT * FROM dbo.Employees;

SELECT FirstName,LastName FROM dbo.Employees;

SELECT FirstName as EmployeeName FROM dbo.Employees;

SELECT FirstName 'EmployeeName' FROM dbo.Employees;

SELECT 'EmplyeeName' = FirstNAme FROM dbo.Employees;

SELECT * FROM dbo.Employees WHERE FirstName = 'Steven';

SELECT * FROM dbo.Employees WHERE FirstName IN ('Neena','Lex');

SELECT * FROM dbo.Employees WHERE FirstName NOT IN ('Neena','Lex');

SELECT * FROM dbo.Employees WHERE Salary BETWEEN 5000 AND 8000;

SELECT (FirstName +' '+ LastName) as Names ,Salary,PF = Salary*0.12 FROM dbo.Employees;

SELECT * FROM dbo.Employees WHERE FirstName LIKE 'N%';

SELECT DISTINCT DepartmentID FROM dbo.Employees;

SELECT * FROM dbo.Employees	ORDER BY FirstName DESC;

SELECT EmployeeId,FirstName,LastName,Salary FROM dbo.Employees ORDER BY Salary ASC;

SELECT TOP 2 Salary FROM dbo.Employees;