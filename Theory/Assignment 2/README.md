# Assignment 2 — PostgreSQL as SQL + NoSQL (JSONB)

Navigation: [Main README](../../README.md) · [Theory README](../README.md) · [Open Interactive UI](./index.html) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=Theory/Assignment%202/README.md)

This assignment looks at how PostgreSQL handles both structured relational columns and flexible document-style data using `jsonb`. It pairs a runnable SQL script (`assignment2.sql`) with an interactive browser UI that walks through the queries and results.

---

## Project Structure

```text
Assignment 2/
├── index.html          # Interactive query playground UI
├── styles.css          # Responsive styling and theme toggle
├── app.js              # Playground data and copy-to-clipboard actions
├── assignment2.sql     # Complete PostgreSQL JSONB script
├── README.md
└── .gitignore
```

---

## Running the Interactive UI

Open [`index.html`](./index.html) in a browser, or start a quick local server:

```bash
cd "Theory/Assignment 2"
python3 -m http.server 8000
```

> The browser UI uses the sample dataset from `assignment2.sql` to visualize query results; it does not connect directly to a live PostgreSQL instance.

---

## Running the PostgreSQL Script

Requires PostgreSQL 12 or later:

```bash
createdb assignment2_db
psql assignment2_db -f assignment2.sql
```

You can also open `assignment2.sql` inside pgAdmin's Query Tool and run it against `assignment2_db`.

---

## Schema and Key Operators

```sql
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    profile JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

| Operator | Purpose | Example |
| --- | --- | --- |
| `->` | Extract JSON value | `profile->'skills'` |
| `->>` | Extract JSON value as text | `profile->>'city'` |
| `@>` | Containment check | `profile @> '{"city":"Dehradun"}'` |
| `?` | Check if top-level key exists | `profile ? 'github'` |
| `\|\|` | Merge JSON objects | `profile \|\| '{"verified":true}'` |
| `-` | Remove a key | `profile - 'portfolio'` |

The script also sets up a GIN index (`CREATE INDEX idx_users_profile_gin ON users USING GIN (profile);`) and an expression index on `profile->>'city'`.

---

## PostgreSQL JSONB vs MongoDB

| Area | PostgreSQL + JSONB | MongoDB |
| --- | --- | --- |
| Primary model | Relational with document support | Document-oriented |
| Storage format | `JSONB` (binary JSON) | `BSON` |
| Joins | Native SQL joins | `$lookup` / embedding |
| Transactions | Native ACID | Multi-document ACID supported |
| Document indexing | GIN and expression indexes | Field and compound indexes |

---

## Navigation

- [Back to Main README](../../README.md)
- [Theory README](../README.md)
- [Open Interactive JSONB UI](./index.html)

Made by **Arnav Daftuar**
