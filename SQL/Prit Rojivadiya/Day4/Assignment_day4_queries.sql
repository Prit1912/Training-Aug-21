use db2;

-- Q1

SELECT EmployeeID, 'Name' = FirstName +' '+LastName,Salary, DENSE_RANK() OVER ( ORDER BY Salary DESC) as [Salary_Rank] FROM dbo.Employees


-- Q2

SELECT * FROM 
(SELECT EmployeeID, 'Name' = FirstName +' '+LastName,Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) as [Salary_Rank] FROM dbo.Employees) temp
WHERE Salary_Rank = 4


-- Q3

SELECT DepartmentID, SUM(Salary) as Salaries FROM dbo.Employees GROUP BY DepartmentID


-- Q4

SELECT DepartmentID, SUM(Salary) as Salaries FROM dbo.Employees 
GROUP BY DepartmentID ORDER BY Salaries DESC


-- Q5

SELECT DepartmentId, MAX(Salary) as 'Max_Salary' from dbo.Employees
GROUP BY DepartmentID ORDER BY Max_Salary ASC


-- Q6

SELECT DepartmentId, MIN(Salary) as 'Min_Salary' from dbo.Employees
GROUP BY DepartmentID ORDER BY Min_Salary ASC


-- Q7

SELECT DepartmentId,SUM(Salary) as 'Total_salary' FROM dbo.Employees
GROUP BY DepartmentId HAVING SUM(Salary) > 50000 ORDER BY Total_salary DESC;