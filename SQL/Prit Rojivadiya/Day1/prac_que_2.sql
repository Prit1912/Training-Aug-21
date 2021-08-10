use db1;

CREATE TABLE JobHistory
(
EmployeeId int not null PRIMARY KEY IDENTITY(1,1),
StartDate date not null,
End_Date date CONSTRAINT ChkDate CHECK (End_Date LIKE '--/--/----'),
Job_Id varchar(20) not null,
Department_Id varchar(8) not null,
)


INSERT INTO JobHistory (StartDate,End_Date,Job_Id,Department_Id) VALUES ('2000-12-11','08/10/2005','node02','dotnet')