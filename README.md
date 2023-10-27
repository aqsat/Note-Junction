# NOTE-JUNCTION
   NOTE JUNCTION APPLICATION

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Entity-Relationship Diagram (ERD)](#entity-relationship-diagram-erd)
- [Relations](#Relation)


## Overview

"Note Junction is a web development project, offering a note-taking application for seamless organization and management of notes."

## Features

- User registration and login
- Create and manage notes

## Entity-Relationship Diagram (ERD)

![ERD](https://github.com/aqsat/WebDev/blob/main/ER%20Diagram.PNG)

Entity-Relationship Diagram (ERD) to help users understand the database structure.

## Relations


SQL code for creating the tables and any important constraints:

```sql

CREATE TABLE User (
    userid INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


CREATE TABLE Note (
    noteid INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    userid INT,
    FOREIGN KEY (userid) REFERENCES User(userid)
);

This SQL code creates the "User" and "Note" tables with the following features:

The "User" table has an auto-incrementing primary key userid and "NOT NULL" constraints for the first name, last name, username, and password.
The "Note" table also has an auto-incrementing primary key noteid and a "NOT NULL" constraint for the content. It establishes a relationship with the "User" table via the userid foreign key.



