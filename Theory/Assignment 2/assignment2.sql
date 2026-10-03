-- Assignment 2: PostgreSQL as SQL + NoSQL — Working with JSONB
-- Demonstrates relational columns, JSONB documents, querying, updates and indexes.

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    profile JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Insert flexible document-style data inside a relational table.
INSERT INTO users (name, email, profile) VALUES
('Aarav Sharma', 'aarav@example.com',
 '{"age":21,"city":"Dehradun","skills":["PostgreSQL","Node.js","Git"],"preferences":{"theme":"dark","notifications":true}}'),
('Meera Kapoor', 'meera@example.com',
 '{"age":22,"city":"Delhi","skills":["MongoDB","Express","React"],"preferences":{"theme":"light","notifications":false},"github":"meerak"}'),
('Kabir Singh', 'kabir@example.com',
 '{"age":20,"city":"Dehradun","skills":["Python","PostgreSQL"],"preferences":{"theme":"dark","notifications":true},"interests":["databases","backend"]}'),
('Ishita Rao', 'ishita@example.com',
 '{"age":23,"city":"Bengaluru","skills":["Java","Spring Boot","Docker"],"preferences":{"theme":"dark"},"portfolio":"https://example.com/ishita"}');

-- 1. SQL query on normal relational columns.
SELECT id, name, email FROM users ORDER BY id;

-- 2. Read JSONB fields. ->> returns text.
SELECT name, profile->>'city' AS city, profile->>'age' AS age
FROM users
ORDER BY name;

-- 3. Query a nested JSONB value.
SELECT name, profile->'preferences'->>'theme' AS theme
FROM users
WHERE profile->'preferences'->>'theme' = 'dark';

-- 4. Document-style containment query: users whose city is Dehradun.
SELECT id, name, profile
FROM users
WHERE profile @> '{"city":"Dehradun"}'::jsonb;

-- 5. Search a JSON array using containment.
SELECT name, profile->'skills' AS skills
FROM users
WHERE profile->'skills' @> '["PostgreSQL"]'::jsonb;

-- 6. Find documents containing an optional top-level key.
SELECT name, profile->>'github' AS github
FROM users
WHERE profile ? 'github';

-- 7. Update one nested value without replacing the whole document.
UPDATE users
SET profile = jsonb_set(profile, '{preferences,theme}', '"light"'::jsonb, true)
WHERE email = 'aarav@example.com';

-- 8. Add/merge new flexible attributes.
UPDATE users
SET profile = profile || '{"verified":true,"semester":5}'::jsonb
WHERE email = 'kabir@example.com';

-- 9. Remove a JSON key.
UPDATE users
SET profile = profile - 'portfolio'
WHERE email = 'ishita@example.com';

-- 10. Combine relational and document conditions in one query.
SELECT id, name, email, profile->>'city' AS city
FROM users
WHERE id > 1
  AND profile->>'city' IN ('Delhi', 'Dehradun');

-- 11. Aggregate document data with SQL.
SELECT profile->>'city' AS city, COUNT(*) AS user_count
FROM users
GROUP BY profile->>'city'
ORDER BY user_count DESC, city;

-- 12. General-purpose GIN index for JSONB containment/key searches.
CREATE INDEX idx_users_profile_gin ON users USING GIN (profile);

-- 13. Expression index for a frequently queried JSON property.
CREATE INDEX idx_users_profile_city ON users ((profile->>'city'));

-- PostgreSQL can now use EXPLAIN to show a query plan.
EXPLAIN SELECT * FROM users WHERE profile @> '{"city":"Dehradun"}'::jsonb;

-- Final state of the table.
SELECT id, name, email, jsonb_pretty(profile) AS profile
FROM users
ORDER BY id;
