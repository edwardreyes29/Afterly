USE afterly_db;
DESCRIBE law;
SELECT * FROM law;


SELECT COUNT(*) FROM law; -- Number of rows --
SELECT COUNT(DISTINCT city) FROM law; -- Number of disctinct cities --
SELECT COUNT(DISTINCT state) FROM law; -- Number of distinct states
