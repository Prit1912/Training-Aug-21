use db1;

CREATE TABLE B_Employee (
Employee_Id INT PRIMARY KEY IDENTITY(1,1),
FirstName VARCHAR(10) NOT NULL,
LastName VARCHAR(10) NOT NULL,
Email VARCHAR(15) NOT NULL,
MobileNo VARCHAR(10) NOT NULL,
Salary INT NOT NULL,
Comission INT NOT NULL CONSTRAINT unqCom UNIQUE
)

CREATE TABLE Inventory(
Item_id INT PRIMARY KEY IDENTITY (1,1),
Item_Name VARCHAR(15),
Item_qty INT
)


CREATE TABLE sales(
srno INT PRIMARY KEY IDENTITY (1,1) ,
EmployeeNo INT CONSTRAINT emp_fkForeig REFERENCES B_Employee(Employee_Id) on update NO ACTION,
ItemNo INT CONSTRAINT item_fkForeig REFERENCES Inventory(Item_id) on update NO ACTION,
SaleQty INT
)
 


INSERT INTO B_Employee VALUES ('Prit','Rojivadiya','prit@gmail.com','9925973311',1234,12)
INSERT INTO B_Employee VALUES ('Man','Patel','man@gmail.com','9879265799',5647,56)
INSERT INTO B_Employee VALUES ('Tirth','Mistry','turth@gmail.com','8546251447',4565,75)
INSERT INTO Inventory VALUES ('Pepsi',100)
INSERT INTO Inventory VALUES ('Coca-cola',50)
INSERT INTO Inventory VALUES ('Sprite',30)
INSERT INTO sales VALUES (1,1,20)
INSERT INTO sales VALUES (2,2,30)
INSERT INTO sales VALUES (2,3,10)

select * from B_Employee
select * from Inventory
select * from sales
