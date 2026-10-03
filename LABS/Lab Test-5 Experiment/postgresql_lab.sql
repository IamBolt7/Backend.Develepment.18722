-- Relational vs Document Databases Lab
-- PostgreSQL portion

CREATE DATABASE student_management;

-- After CREATE DATABASE, connect in psql with:
-- \c student_management

CREATE TABLE students (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    branch VARCHAR(50),
    email VARCHAR(255) UNIQUE,
    enrollment_date DATE DEFAULT CURRENT_DATE
);

INSERT INTO students (name, branch, email, enrollment_date) VALUES
('Alice Sharma', 'CSE', 'alice@example.com', '2024-01-15'),
('Bilal Khan', 'ECE', 'bilal@example.com', '2023-08-10'),
('Carla Gomez', 'CSE', 'carla@example.com', '2024-03-02'),
('Divya Nair', 'ME', 'divya@example.com', '2023-11-20'),
('Ethan Brooks', 'CSE', 'ethan@example.com', '2024-02-18');

-- Read: students in CSE
SELECT * FROM students WHERE branch = 'CSE';

-- Read: students enrolled after January 2024
SELECT * FROM students WHERE enrollment_date > '2024-01-31';

-- Bonus: case-insensitive name search
SELECT * FROM students WHERE name ILIKE 'a%';

-- Update a branch
UPDATE students
SET branch = 'AI/ML'
WHERE email = 'bilal@example.com';

-- Check before deleting
SELECT * FROM students WHERE email = 'divya@example.com';

-- Delete a record
DELETE FROM students
WHERE email = 'divya@example.com';

-- Bonus aggregation
SELECT branch, COUNT(*) AS total
FROM students
GROUP BY branch
ORDER BY total DESC;
