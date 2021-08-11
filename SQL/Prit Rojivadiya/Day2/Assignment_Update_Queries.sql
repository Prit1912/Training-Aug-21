use db2

ALTER TABLE dbo.Employees DROP CONSTRAINT ukEmail;


UPDATE dbo.Employees 
SET Email = 'Not Available';


UPDATE dbo.Employees 
SET Email = 'Not Available', CommissionPct = 0.10;


UPDATE dbo.Employees 
SET Email = 'Not Available', CommissionPct = 0.10
WHERE DepartmentID = 110;


UPDATE dbo.Employees 
SET Email = 'Not Available'
WHERE DepartmentID = 80 AND CommissionPct<0.2;


UPDATE dbo.Employees 
SET Email = 'Not Available'
WHERE JobId = 'FI_ACCOUNT';


UPDATE dbo.Employees 
SET Salary = 8000
WHERE EmployeeID = 105 AND Salary<5000;


UPDATE dbo.Employees 
SET JobId = 'SH_CLERK'
WHERE EmployeeID = 118 AND DepartmentID = 30 AND JobId NOT LIKE 'SH%';


UPDATE dbo.Employees 
SET Salary = CASE DepartmentID
				 WHEN 40 THEN Salary+(Salary*.25) 
				 WHEN 90 THEN Salary+(Salary*.15)
				 WHEN 110 THEN Salary+(Salary*.10)
				 ELSE Salary
			 END;


UPDATE dbo.Employees
SET Salary = Salary + (Salary*0.20), CommissionPct = CommissionPct + 0.10
WHERE JobId = 'PU_CLERK';