# NOTE-JUNCTION APPLICATION

## Table of Contents

- [Description](#Description)
- [Entity-Relationship Diagram](#entity-relationship-diagram)
- [Relations](#Relations)

## Description

Note Junction is a web development project, offering a note-taking application for seamless organization and management of notes. Note Junction provides a versatile platform for capturing, storing, and accessing your thoughts, ideas, tasks, and important information.It brings to you a suite of features that includes:"

**User Sign-Up and Sign-In:**
Effortlessly handle user registration and login.

**Notes Creation and Administration:**
Smoothly craft and oversee your notes.


## Entity-Relationship Diagram

![ERD](https://github.com/aqsat/WebDev/blob/main/ER%20Diagram.PNG)

## Relations

![RD](https://github.com/aqsat/Note-Junction/blob/main/Relation%20Diagram.PNG)) 

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



