# Assignment 2 — PostgreSQL as SQL + NoSQL: Working with JSONB

A complete Theory Assignment demonstrating how **PostgreSQL JSONB** combines relational SQL features with flexible, document-style data. The project includes a runnable SQL experiment and a responsive interactive webpage that explains the major JSONB operations visually.

## Learning Objective

Understand how PostgreSQL's `jsonb` type allows one database to support both structured relational data and flexible JSON documents, and evaluate situations in which PostgreSQL JSONB can serve needs commonly associated with MongoDB.

## What this project demonstrates

- A relational `users` table with a flexible `JSONB` profile column
- Inserting documents with different structures
- Reading JSON fields with `->` and `->>`
- Querying nested values
- JSON containment with `@>`
- Searching JSON arrays
- Testing whether a key exists with `?`
- Updating nested JSON with `jsonb_set()`
- Merging and removing JSON properties
- Combining ordinary SQL conditions with JSONB conditions
- Aggregating JSON values with SQL
- Creating GIN and expression indexes
- Comparing PostgreSQL JSONB with MongoDB

## Project structure

```text
Assignment 2/
├── index.html          # Interactive assignment UI
├── styles.css          # Responsive styling and light/dark themes
├── app.js              # Query playground interactions
├── assignment2.sql     # Complete PostgreSQL JSONB experiment
├── README.md           # Documentation
└── .gitignore
```

## Run the interactive UI

No framework or installation is required. Open `index.html` directly in a browser. For a local development server, you can also run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

> The webpage is an educational visualization. Its displayed query results are based on the sample dataset in `assignment2.sql`; it does not connect directly to PostgreSQL.

## Run the PostgreSQL experiment

### Requirements

- PostgreSQL 12 or later
- `psql`, pgAdmin, DBeaver, or another PostgreSQL client

### Terminal method

```bash
createdb assignment2_db
psql assignment2_db -f assignment2.sql
```

### pgAdmin method

1. Create a database named `assignment2_db`.
2. Open **Query Tool** for that database.
3. Open or paste `assignment2.sql`.
4. Execute the script.
5. Inspect the output of each `SELECT`, `UPDATE`, and `EXPLAIN` statement.

## Database design

The experiment stores predictable fields relationally and flexible attributes as JSONB:

```sql
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    profile JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

`id`, `name`, and `email` benefit from conventional types and constraints. `profile` can vary from user to user, making it suitable for optional attributes such as skills, preferences, interests, and portfolio information.

## Important JSONB operators

| Operator | Purpose | Example |
|---|---|---|
| `->` | Return a JSON value | `profile->'skills'` |
| `->>` | Return a JSON value as text | `profile->>'city'` |
| `@>` | Test JSON containment | `profile @> '{"city":"Dehradun"}'` |
| `?` | Check for a top-level key | `profile ? 'github'` |
| `||` | Merge JSON objects | `profile || '{"verified":true}'` |
| `-` | Remove a key | `profile - 'portfolio'` |

## Example queries

### Extract a field

```sql
SELECT name, profile->>'city' AS city
FROM users;
```

### Query a nested field

```sql
SELECT name
FROM users
WHERE profile->'preferences'->>'theme' = 'dark';
```

### Document-style containment

```sql
SELECT name
FROM users
WHERE profile @> '{"city":"Dehradun"}'::jsonb;
```

### Search inside an array

```sql
SELECT name
FROM users
WHERE profile->'skills' @> '["PostgreSQL"]'::jsonb;
```

### Update a nested value

```sql
UPDATE users
SET profile = jsonb_set(
    profile,
    '{preferences,theme}',
    '"light"'::jsonb,
    true
)
WHERE email = 'aarav@example.com';
```

## JSONB indexing

A general GIN index can improve many containment and key searches:

```sql
CREATE INDEX idx_users_profile_gin
ON users USING GIN (profile);
```

A frequently queried JSON property can also receive an expression index:

```sql
CREATE INDEX idx_users_profile_city
ON users ((profile->>'city'));
```

`EXPLAIN` can then be used to inspect PostgreSQL's query plan. With a tiny teaching dataset PostgreSQL may still choose a sequential scan because reading the whole table is inexpensive; indexes become more meaningful as data volume grows.

## PostgreSQL JSONB vs MongoDB

| Area | PostgreSQL JSONB | MongoDB |
|---|---|---|
| Primary model | Relational with document support | Document-oriented |
| Document format | JSONB | BSON |
| Schema flexibility | Flexible inside JSONB | Flexible documents |
| Joins | Native SQL joins | `$lookup` / document modeling |
| Constraints | Rich relational constraints | Validation and indexes |
| Transactions | ACID transactions | ACID transactions supported |
| Document indexing | GIN and expression indexes | Field, compound and other indexes |
| Query style | SQL + JSON operators/functions | MongoDB Query API / aggregation pipeline |

## When PostgreSQL JSONB is useful

JSONB is particularly useful when an application has a stable relational core but also needs flexible attributes. Examples include user preferences, product metadata, event payloads, configuration, API responses, and optional profile fields. Keeping these alongside relational data can simplify architecture when the application also relies on joins, constraints, transactions, reporting, and SQL tooling.

MongoDB can be a natural choice when the application is designed primarily around documents and its data model, operational tooling, and query patterns are already centered on MongoDB. The appropriate choice depends on the application's data relationships, access patterns, scaling requirements, and team expertise.

## UI features

The included webpage adds a polished presentation layer for the assignment with a responsive layout, dark/light theme toggle, interactive JSONB query playground, copy-to-clipboard SQL, operator cards, PostgreSQL-vs-MongoDB comparison, and mobile-friendly styling. It uses only HTML, CSS, and vanilla JavaScript, so there are no npm dependencies.

## Key takeaway

PostgreSQL remains a relational database when JSONB is used. JSONB extends the relational model by allowing flexible documents to live beside conventional typed columns. A practical design is to keep stable, important attributes in normal columns and use JSONB where genuine schema flexibility is valuable.

## Assignment summary

**Topic:** PostgreSQL as SQL + NoSQL — Working with JSONB  
**Core technology:** PostgreSQL / JSONB  
**Supporting UI:** HTML, CSS, JavaScript  
**Outcome:** Demonstrates storage, querying, updates, indexing, relational/document integration, and a balanced comparison with MongoDB.
