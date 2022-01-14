CREATE DATABASE weather;

CREATE TABLE IF NOT EXISTS weather(
    id SERIAL,
    city varchar(30),
    temperature smallint,
    pressure smallint,
    humidity smallint,
    dateandtime timestamp
);

