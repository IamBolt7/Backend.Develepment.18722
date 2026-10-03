# Run the lab on macOS (Homebrew)

## 1. Install and start PostgreSQL

```bash
brew install postgresql@16
brew services start postgresql@16
pg_isready
psql --version
```

From the folder containing these files, open PostgreSQL:

```bash
psql postgres
```

Inside `psql`, create the database:

```sql
CREATE DATABASE student_management;
\\q
```

Then run the rest of the PostgreSQL script. Because `postgresql_lab.sql` also contains the database-creation line for a complete lab record, the easiest repeatable approach is:

```bash
psql student_management
```

and inside `psql` run the table/CRUD statements from `postgresql_lab.sql`, starting at `CREATE TABLE`.

Alternatively, create a temporary copy without the first `CREATE DATABASE` statement and execute it with `\\i`.

Then execute JSONB commands:

```text
\\i /full/path/to/jsonb_extension.sql
```

Useful checks:

```text
\\dt
\\d students
SELECT * FROM students;
```

## 2. Install and start MongoDB

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
mongosh
```

Inside `mongosh`, paste the contents of `mongodb_lab.js`, or run the file directly from the terminal:

```bash
mongosh < mongodb_lab.js
```

## 3. What to capture for a lab record
Capture your own terminal output after running the scripts: table creation, inserted rows, CSE query, enrollment-date query, update result, delete result, MongoDB documents/queries, and JSONB query results.
