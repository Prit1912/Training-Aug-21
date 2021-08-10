USE db1;

CREATE TABLE countries
(
CountryId int not null PRIMARY KEY IDENTITY(1,1),
CountryName varchar(20) not null CONSTRAINT ckeckCountryName CHECK(CountryName IN ('Italy','India','Chine')),
RegionId varchar(20) not null CONSTRAINT unique_region UNIQUE (CountryId,RegionId),
)

INSERT INTO countries (CountryName,RegionId) VALUES ('India','delhi123');