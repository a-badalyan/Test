CREATE DATABASE weather;

CREATE TABLE weather(
    id SERIAL,
    city varchar(30),
    temperature smallint,
    pressure smallint,
    humidity smallint,
    dateandtime timestamp
);

SELECT * FROM weather;

DELETE FROM weather *;

