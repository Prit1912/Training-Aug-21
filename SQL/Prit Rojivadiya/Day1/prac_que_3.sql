use db1;

CREATE TABLE jobs
(
JobId int not null PRIMARY KEY identity(1,1),
JobTitle varchar(20) not null DEFAULT ' ',
MinSalary Numeric(10) DEFAULT 8000,
MaxSalary Numeric(10) DEFAULT null,
)