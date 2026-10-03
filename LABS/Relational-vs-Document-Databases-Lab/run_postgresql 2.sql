-- Execute with: psql student_management -f run_postgresql.sql
CREATE TABLE IF NOT EXISTS students (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    branch VARCHAR(50),
    email VARCHAR(255) UNIQUE,
    enrollment_date DATE DEFAULT CURRENT_DATE
);

TRUNCATE TABLE students RESTART IDENTITY;

INSERT INTO students (name, branch, email, enrollment_date) VALUES
('Alice Sharma', 'CSE', 'alice@example.com', '2024-01-15'),
('Bilal Khan', 'ECE', 'bilal@example.com', '2023-08-10'),
('Carla Gomez', 'CSE', 'carla@example.com', '2024-03-02'),
('Divya Nair', 'ME', 'divya@example.com', '2023-11-20'),
('Ethan Brooks', 'CSE', 'ethan@example.com', '2024-02-18');

SELECT * FROM students WHERE branch = 'CSE';
SELECT * FROM students WHERE enrollment_date > '2024-01-31';
UPDATE students SET branch = 'AI/ML' WHERE email = 'bilal@example.com';
DELETE FROM students WHERE email = 'divya@example.com';
SELECT * FROM students ORDER BY id;
