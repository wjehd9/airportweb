CREATE DATABASE IF NOT EXISTS Airport default CHARACTER SET UTF8;

use Airport;

CREATE TABLE IF NOT EXISTS Departure(
    flightId VARCHAR(20),
    airline VARCHAR(20),
    scheduleDateTime VARCHAR(5),
    airport VARCHAR(20),
    chkinrange VARCHAR(15),
    gatenumber INT,
    remark VARCHAR(20),
    terminalId VARCHAR(5),
    f_id VARCHAR(20),
    PRIMARY KEY(f_id)
) CHARSET=utf8;

CREATE TABLE IF NOT EXISTS customer(
    p_id VARCHAR(20),
    PRIMARY KEY(p_id)
) CHARSET=utf8;



