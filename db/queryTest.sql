USE afterly_db;
DESCRIBE law;

SELECT * FROM Users;
SELECT * FROM Cases;

SELECT * FROM EstateLaws; 
SELECT * FROM LifeInsurances;
SELECT * FROM Funerals;
SELECT * FROM Hospices;






DELETE FROM Funerals WHERE id = 2;

SELECT * FROM law ORDER BY state;
SELECT DISTINCT state FROM law ORDER BY state;
SELECT COUNT(*) FROM law; -- Number of rows --
SELECT COUNT(DISTINCT city) FROM law; -- Number of disctinct cities --
SELECT COUNT(DISTINCT state) FROM law; -- Number of distinct states

SELECT * FROM hospice ORDER BY state;
SELECT DISTINCT state FROM hospice ORDER BY state;
SELECT COUNT(*) FROM hospice; -- Number of rows --
SELECT COUNT(DISTINCT city) FROM hospice; -- Number of disctinct cities --
SELECT COUNT(DISTINCT state) FROM hospice; -- Number of distinct states

SELECT * FROM funeral ORDER BY state;
SELECT DISTINCT state FROM funeral ORDER BY state;
SELECT COUNT(*) FROM funeral; -- Number of rows --
SELECT COUNT(DISTINCT city) FROM funeral; -- Number of disctinct cities --
SELECT COUNT(DISTINCT state) FROM funeral; -- Number of distinct states

SELECT * FROM life_insurance ORDER BY state;
SELECT DISTINCT state FROM life_insurance ORDER BY state;
SELECT COUNT(*) FROM life_insurance; -- Number of rows --
SELECT COUNT(DISTINCT city) FROM life_insurance; -- Number of disctinct cities --
SELECT COUNT(DISTINCT state) FROM life_insurance; -- Number of distinct states
