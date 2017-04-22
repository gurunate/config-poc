DROP DATABASE config_poc;

CREATE DATABASE config_poc;

USE config_poc;

CREATE TABLE states (
  abv  VARCHAR(10)  NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (abv)
);

