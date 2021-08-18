-- Subquery task

use db2

SELECT * FROM Employees
SELECT * FROM Departments
SELECT * FROM Locations


-- Q1 
SELECT FirstName,LastName,Salary FROM Employees
WHERE Salary > (SELECT Salary FROM Employees WHERE LastName = 'Bull')

-- Q2
SELECT e.FirstName,e.LastName FROM Employees e
WHERE e.DepartmentID = (SELECT d.DepartmentID FROM Departments d WHERE DepartmentName = 'IT')

-- Q3
SELECT e.FirstName,e.LastName FROM Employees e
WHERE e.ManagerID IN (
					SELECT d.ManagerID FROM Departments d WHERE d.LocationID IN 
					(SELECT l.LocationID FROM Locations l WHERE l.CountryID = 'US')
					)


-- Q4
SELECT FirstName,LastName FROM Employees 
WHERE EmployeeID IN (SELECT ManagerID FROM Employees)


-- Q5
SELECT FirstName,LastName,Salary FROM Employees 
WHERE Salary > (SELECT AVG(Salary) FROM Employees)


-- Q6
SELECT e.FirstName,e.LastName,e.JobId,e.Salary FROM Employees e
WHERE e.Salary = (SELECT MIN(Salary) FROM Employees WHERE e.JobId = JobId)


-- Q7
SELECT FirstName,LastName,Salary FROM Employees 
WHERE Salary > (SELECT AVG(Salary) FROM Employees) 
AND DepartmentID IN (SELECT DepartmentID FROM Departments WHERE DepartmentName LIKE 'IT%')


-- Q8
SELECT FirstName,LastName,Salary FROM Employees 
WHERE Salary > (SELECT Salary FROM Employees WHERE LastName = 'Bell')


-- Q9
SELECT FirstName,LastName,Salary FROM Employees 
WHERE Salary = (SELECT MIN(Salary) FROM Employees)


-- Q10
SELECT FirstName,LastName,Salary FROM Employees 
WHERE Salary > ALL(SELECT AVG(Salary) FROM Employees GROUP BY DepartmentID)


-- Q11
SELECT FirstName,LastName,Salary FROM Employees 
WHERE Salary > (SELECT MAX(Salary) FROM Employees WHERE JobId = 'SH_CLERK')
ORDER BY Salary


-- Q12
SELECT FirstName,LastName FROM Employees
WHERE EmployeeID NOT IN (SELECT ManagerID FROM Employees)


-- Q13
SELECT e.EmployeeID,
	   e.FirstName,
	   e.LastName,
	   (SELECT d.DepartmentName FROM Departments d WHERE d.DepartmentID = e.DepartmentId) as 'Dept_Name' 
FROM Employees e


-- Q14
SELECT e.EmployeeID,e.FirstName,e.LastName,e.Salary FROM Employees e
WHERE Salary > (SELECT AVG(Salary) FROM Employees WHERE e.DepartmentID = DepartmentID)


-- Q15
SELECT * FROM 
(SELECT *,ROW_NUMBER() OVER (ORDER BY EmployeeID ASC) as 'rn' FROM Employees) temp
WHERE rn%2 = 0



-- Q16
SELECT Salary as 'Fifth_Max' FROM Employees
WHERE Salary = (SELECT TOP 1 Salary FROM (SELECT Salary,DENSE_RANK() OVER (ORDER BY Salary DESC) as 'D_Rank' FROM Employees) temp 
		  WHERE D_Rank = 5)


-- Q17
SELECT DISTINCT Salary FROM Employees
WHERE Salary = 
(SELECT DISTINCT Salary FROM
(SELECT Salary,DENSE_RANK() OVER (ORDER BY Salary ASC) as 'dRank' FROM Employees) tmp
WHERE dRank = 4)


-- Q18
SELECT * FROM ( SELECT TOP 10 * FROM Employees ORDER BY EmployeeID DESC) temp
ORDER BY EmployeeID ASC


-- Q19
SELECT DepartmentID,DepartmentName FROM Departments
WHERE DepartmentID NOT IN (SELECT DepartmentID FROM Employees)


-- Q20
SELECT TOP 3 Salary FROM
(SELECT DISTINCT Salary,DENSE_RANK() OVER (ORDER BY Salary DESC) as 'drank' FROM Employees) temp
ORDER BY drank ASC


-- Q21
SELECT TOP 3 Salary FROM
(SELECT DISTINCT Salary,DENSE_RANK() OVER (ORDER BY Salary DESC) as 'drank' FROM Employees) temp


-- Q22
DECLARE @n int
SET @n = 7

SELECT DISTINCT Salary FROM Employees
WHERE Salary = 
(SELECT DISTINCT Salary FROM
(SELECT Salary,DENSE_RANK() OVER (ORDER BY Salary ASC) as 'dRank' FROM Employees) tmp
WHERE dRank = @n)

