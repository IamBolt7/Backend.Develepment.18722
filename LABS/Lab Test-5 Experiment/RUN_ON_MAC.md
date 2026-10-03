# Running Lab Test-5 on macOS

## PostgreSQL

Install and start PostgreSQL 16:

```bash
brew install postgresql@16
brew services start postgresql@16
pg_isready
psql --version
```

Create the database once and run the repeatable lab script:

```bash
createdb student_management
psql student_management -f run_postgresql.sql
psql student_management -f jsonb_extension.sql
```

If `student_management` already exists, skip `createdb`.

Inspect it interactively:

```bash
psql student_management
```

Useful commands inside `psql`:

```text
\dt
\d students
SELECT * FROM students ORDER BY id;
\q
```

## MongoDB

Install and start MongoDB Community Edition:

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
mongosh --version
```

Run the lab script:

```bash
mongosh mongodb_lab.js
```

Or open `mongosh` and paste the commands from `mongodb_lab.js`.

## Browser UI

The UI is a presentation layer for the experiment and uses the same sample dataset.

```bash
open ui/index.html
```

For a local web server:

```bash
cd ui
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Recommended evidence for submission

Capture your own terminal output for database creation, inserted rows, CSE query, enrollment-date query, branch update, deletion, MongoDB operations, and JSONB queries. This ensures the submitted screenshots demonstrate your own successful execution.
