use db2;

SELECT 'fname' = FirstName, 'len' = LEN(FirstName) from dbo.Employees WHERE FirstName LIKE '[AJM]%';

SELECT FirstName , SALARY = REPLICATE('$', 10-LEN(Salary))+CAST(Salary AS varchar(10)) FROM dbo.Employees

SELECT EmployeeID,FirstName,LastName,HireDate FROM dbo.Employees WHERE MONTH(HireDate) = 7 OR DAY(HireDate) = 7;

SELECT 'fnameLen' = LEN(FirstName),FirstName,LastName FROM dbo.Employees WHERE (SELECT CHARINDEX('c',LastName))>2; 

SELECT 'Last4' = RIGHT(PhoneNumber,4) FROM dbo.Employees;

SELECT 'ReplacedPhoneNo' = (REPLACE(PhoneNumber,124,999)) FROM dbo.Employees;

SELECT DATEDIFF(YEAR,'2000-12-19',GETDATE());

SELECT DATEDIFF(MM,'2000-12-19',GETDATE());

SELECT DATEDIFF(DAY,'2000-12-19',GETDATE());

SELECT DISTINCT DATENAME(DAYOFYEAR,HireDate),HireDate FROM dbo.Employees WHERE DATENAME(WEEKDAY,HireDate) = 'Monday'; 

SELECT DISTINCT HireDate FROM dbo.Employees WHERE DATENAME(WEEKDAY,HireDate) = 'Monday'; 

SELECT FirstName,HireDate FROM dbo.Employees WHERE HireDate BETWEEN '1987-06-01' AND '1987-07-30';

SELECT FORMAT(getDate(),'hh:mm tt MMM dd, yyyy')

SELECT FirstName,LastName FROM dbo.Employees WHERE DATENAME(MONTH,HireDate) = 'June';

SELECT FirstName,LastName, 'YOE' = DATEDIFF(YEAR,HireDate,GETDATE()) FROM dbo.Employees;

SELECT FirstName,LastName, 'YOE' = DATEDIFF(MONTH,HireDate,GETDATE()) FROM dbo.Employees;

SELECT FirstName FROM dbo.Employees WHERE YEAR(HireDate) = 1987;

