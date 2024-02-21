DROP DATABASE IF EXISTS runTracker_db;
CREATE DATABASE runTracker_db;
USE runTracker_db;

CREATE TABLE runner_info (
    runner_id INT(6) AUTO_INCREMENT NOT NULL
    , firstname VARCHAR(30) NOT NULL
    , lastname VARCHAR(30) NOT NULL
    , email VARCHAR(99) NOT NULL
    , password VARCHAR(30) NOT NULL
    , PRIMARY KEY (runner_id)
);

DROP DATABASE IF EXISTS userRunStats;
CREATE DATABASE userRunStats;
USE userRunStats;

CREATE TABLE run_stats (
    runner_id (FK)
    , distance INT NOT NULL
    , duration INT NOT NULL
    , date_of_run DATE NOT NULL
    , time_of_run TIME NOT NULL
    , feeling VARCHAR(60)
    , CONSTRAINT runner_id FOREIGN KEY (runner_id) REFERENCES runner_info(runner_id)
    , PRIMARY KEY (runner_id)
);
