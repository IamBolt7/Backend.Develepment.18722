# Lab: Relational vs Document Databases — PostgreSQL & MongoDB

## Objective
Create and query a student database in PostgreSQL, repeat the basic CRUD operations in MongoDB, and compare relational and document-oriented storage. The lab also demonstrates PostgreSQL JSONB as a way to keep flexible document-like data inside a relational database.

## Files
- `postgresql_lab.sql` — PostgreSQL database/table, 5 records, queries, update, delete, and aggregation.
- `mongodb_lab.js` — MongoDB collection with 3 documents and CRUD queries.
- `jsonb_extension.sql` — JSONB field, JSON operators, containment query, and GIN index.
- `comparison.md` — PostgreSQL vs MongoDB comparison and conclusion.
- `RUN_ON_MAC.md` — concise macOS/Homebrew setup and run instructions.

## PostgreSQL psql meta-commands used in the lab
These begin with `\\` and do not need a semicolon:

- `\\q` — quit psql
- `\\l` — list databases
- `\\c student_management` — connect to the lab database
- `\\dt` — list tables
- `\\d students` — describe the students table
- `\\du` — list roles/users
- `\\?` — psql meta-command help
- `\\h CREATE TABLE` — SQL syntax help
- `\\i /path/to/file.sql` — execute a SQL script inside psql

Backup/restore from the terminal:

```bash
pg_dump student_management > backup.sql
psql student_management < backup.sql
```

## Expected PostgreSQL observations
Before the update/delete, the inserted CSE students are Alice Sharma, Carla Gomez, and Ethan Brooks. Students after January 2024 are Carla Gomez and Ethan Brooks. The update changes Bilal Khan from ECE to AI/ML. The delete removes Divya Nair.

## Submission note
The scripts intentionally contain the commands rather than fabricated screenshots/output. Run them locally to produce genuine terminal output for your lab record.
