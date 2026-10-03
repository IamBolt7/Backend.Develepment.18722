# Lab Test-5 Experiment
## Relational vs Document Databases — PostgreSQL & MongoDB

A complete Backend Development lab comparing a **relational database (PostgreSQL)** with a **document database (MongoDB)** through the same student-management use case. The experiment also demonstrates how PostgreSQL **JSONB** can provide document-style flexibility inside a relational database.

## Objectives

- Create the `student_management` PostgreSQL database.
- Create a typed `students` table with `id`, `name`, `branch`, `email`, and `enrollment_date`.
- Insert at least five student records.
- Perform CRUD operations and filtering in PostgreSQL.
- Create a MongoDB `students` collection with at least three documents.
- Perform equivalent MongoDB CRUD operations.
- Compare SQL and document-oriented querying.
- Demonstrate PostgreSQL JSONB, JSON operators, containment queries, and a GIN index.
- Provide a small responsive browser UI to present the experiment and sample dataset.

## Repository Structure

```text
Lab Test-5 Experiment/
├── README.md
├── RUN_ON_MAC.md
├── comparison.md
├── postgresql_lab.sql
├── run_postgresql.sql
├── mongodb_lab.js
├── jsonb_extension.sql
└── ui/
    ├── index.html
    ├── styles.css
    └── app.js
```

## Experiment Dataset

| ID | Name | Branch | Email | Enrollment Date |
|---:|---|---|---|---|
| 1 | Alice Sharma | CSE | alice@example.com | 2024-01-15 |
| 2 | Bilal Khan | ECE | bilal@example.com | 2023-08-10 |
| 3 | Carla Gomez | CSE | carla@example.com | 2024-03-02 |
| 4 | Divya Nair | ME | divya@example.com | 2023-11-20 |
| 5 | Ethan Brooks | CSE | ethan@example.com | 2024-02-18 |

## PostgreSQL Implementation

The schema uses an identity primary key, typed columns, a unique email constraint, and a default enrollment date.

```sql
CREATE TABLE students (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    branch VARCHAR(50),
    email VARCHAR(255) UNIQUE,
    enrollment_date DATE DEFAULT CURRENT_DATE
);
```

Required queries are included in `postgresql_lab.sql` and the repeatable runner `run_postgresql.sql`:

```sql
SELECT * FROM students WHERE branch = 'CSE';
SELECT * FROM students WHERE enrollment_date > '2024-01-31';
UPDATE students SET branch = 'AI/ML' WHERE email = 'bilal@example.com';
DELETE FROM students WHERE email = 'divya@example.com';
```

The SQL portion also includes a case-insensitive search and branch-wise aggregation as bonus operations.

## MongoDB Implementation

`mongodb_lab.js` creates equivalent student documents and demonstrates `insertMany()`, `find()`, `updateOne()`, and `deleteOne()`.

```javascript
db.students.find({ branch: "CSE" })
db.students.find({ enrollment_date: { $gt: new Date("2024-01-31") } })
db.students.updateOne(
  { email: "bilal@example.com" },
  { $set: { branch: "AI/ML" } }
)
db.students.deleteOne({ email: "carla@example.com" })
```

## PostgreSQL JSONB Extension

`jsonb_extension.sql` adds a flexible `profile` field while preserving the relational student schema.

```sql
ALTER TABLE students ADD COLUMN IF NOT EXISTS profile JSONB;

UPDATE students
SET profile = '{"skills":["python","sql"],"clubs":{"robotics":true}}'
WHERE email = 'alice@example.com';
```

It demonstrates `->`, `->>`, `@>` and a GIN index for JSONB lookup.

## Browser UI

A responsive presentation UI is included in `ui/`. It does not replace PostgreSQL or MongoDB; it is a visual companion for the lab. It contains:

- experiment overview and technology cards;
- searchable/filterable student table;
- PostgreSQL and MongoDB query examples;
- relational-vs-document comparison;
- JSONB explanation;
- responsive layout for desktop and mobile.

Open it directly:

```bash
open ui/index.html
```

Or serve it locally:

```bash
cd ui
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Quick Start on macOS

Detailed instructions are in [`RUN_ON_MAC.md`](RUN_ON_MAC.md). The short version is:

```bash
brew install postgresql@16
brew services start postgresql@16
createdb student_management
psql student_management -f run_postgresql.sql
psql student_management -f jsonb_extension.sql
```

MongoDB:

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
mongosh mongodb_lab.js
```

## Expected Results

- Initial CSE query: **Alice Sharma, Carla Gomez, Ethan Brooks**.
- Enrolled after January 2024: **Carla Gomez, Ethan Brooks**.
- Update: **Bilal Khan** changes from `ECE` to `AI/ML`.
- PostgreSQL delete: **Divya Nair** is removed.
- MongoDB script demonstrates equivalent document CRUD operations.
- JSONB query returns Alice's skills/profile and can match the nested robotics membership.

## PostgreSQL vs MongoDB Summary

| Feature | PostgreSQL | MongoDB |
|---|---|---|
| Model | Tables and rows | Collections and documents |
| Schema | Explicit and strongly typed | Flexible document shape |
| Query language | SQL | MongoDB Query Language |
| Relationships | Native joins + foreign keys | Embedding/references + `$lookup` |
| Transactions | Full ACID support | Supports multi-document transactions |
| Flexible fields | JSON/JSONB | Native BSON documents |
| Good fit here | Core structured student data | Variable/nested student metadata |

For the complete discussion, see [`comparison.md`](comparison.md).

## Useful `psql` Commands

```text
\l                       list databases
\c student_management    connect to the database
\dt                      list tables
\d students              describe the students table
\du                      list roles/users
\?                       psql command help
\h CREATE TABLE          SQL syntax help
\i /path/to/file.sql     run a SQL file
\q                       quit
```

Backup and restore:

```bash
pg_dump student_management > backup.sql
psql student_management < backup.sql
```

## Learning Outcome

This experiment shows that PostgreSQL is a natural fit when the main data has a predictable structure and benefits from constraints, transactions, and relationships. MongoDB offers convenient document flexibility when records can vary significantly. PostgreSQL JSONB provides a hybrid approach: structured relational columns for core data and flexible JSON for optional or nested attributes.

## Submission Notes

Run the scripts locally and capture genuine terminal output/screenshots if your instructor requires execution evidence. The repository contains executable source files rather than fabricated result screenshots.
