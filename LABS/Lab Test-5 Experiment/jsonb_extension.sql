-- PostgreSQL JSONB extension portion
-- Run after postgresql_lab.sql in student_management.

ALTER TABLE students ADD COLUMN IF NOT EXISTS profile JSONB;

UPDATE students
SET profile = '{"skills": ["python", "sql"], "clubs": {"robotics": true}}'
WHERE email = 'alice@example.com';

-- -> returns JSON; ->> returns text
SELECT profile -> 'skills' FROM students WHERE email = 'alice@example.com';
SELECT profile ->> 'clubs' FROM students WHERE email = 'alice@example.com';

-- JSONB containment check
SELECT * FROM students
WHERE profile @> '{"clubs": {"robotics": true}}';

-- Index JSONB for faster lookups
CREATE INDEX idx_students_profile ON students USING GIN (profile);
