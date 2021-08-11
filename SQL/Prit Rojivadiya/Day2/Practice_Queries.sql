use db2;

SELECT CountryId,RegionId FROM dbo.Countries;

SELECT CountryId as CId,RegionId as RId FROM dbo.Countries;

SELECT CountryId 'CId',RegionId 'RId' FROM dbo.Countries;

SELECT 'Cid' = CountryId,'Rid' = RegionId FROM dbo.Countries;

SELECT CountryId, 'CountryName: '+CountryName AS Country FROM dbo.Countries;

SELECT RegionId , NewId = 1 + RegionId, CountryName FROM dbo.Countries;

SELECT * FROM Countries WHERE RegionId = 4;

SELECT * FROM Countries WHERE RegionId < 4;

SELECT * FROM Countries WHERE RegionId BETWEEN 2 AND 4;

SELECT * FROM Countries WHERE RegionId IN (1,2);

SELECT * FROM Countries WHERE CountryName LIKE 'In%';

SELECT * FROM Countries WHERE CountryName is not null;

SELECT * FROM Countries ORDER BY CountryName ASC;

SELECT TOP 10 * FROM Countries;

SELECT DISTINCT RegionId,CountryName FROM Countries WHERE CountryName LIKE 'I%';

SELECT DISTINCT RegionId FROM Countries;

SELECT COUNT(DISTINCT RegionId) as total FROM Countries;

SELECT * FROM Countries WHERE RegionId = 4 UNION SELECT * FROM Countries WHERE CountryName LIKE 'A%';

SELECT * INTO cnt FROM (SELECT * FROM dbo.Countries) cnt1;

SELECT * FROM cnt;

ALTER TABLE dbo.cnt ADD Extra varchar(20);

UPDATE dbo.cnt SET Extra = 'Practice';

SELECT Extra + ' add' as cIdAdd, 'nc'='NewColumn' FROM cnt;

SELECT CountryName,CountryId,RegionId, NewId = RegionId + 1 FROM Countries WHERE CountryName LIKE 'I%';