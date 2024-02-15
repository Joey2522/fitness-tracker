DROP DATABASE IF EXISTS runTracker_db;

CREATE DATABASE runTracker_db;

USE runTracker_db;

CREATE TABLE (
    id INT(6) NOT NULL AUTO-INCREMENT
    , firstname VARCHAR(30) NOT NULL 
    , lastname VARCHAR(30) NOT NULL 
    , email VARCHAR(99) NOT NULL
    , password VARCHAR(30) NOT NULL
    , PRIMARY KEY (id)
)