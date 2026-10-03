# PostgreSQL vs MongoDB — Lab Comparison

| Aspect | PostgreSQL | MongoDB |
|---|---|---|
| Data model | Relational tables with rows and typed columns | Collections containing BSON/JSON-like documents |
| Schema | Strong, explicit schema by default | Flexible document structure |
| Insert style | `INSERT INTO ... VALUES ...` | `insertOne()` / `insertMany()` |
| Query style | Standard SQL with `SELECT`, `WHERE`, `JOIN`, etc. | MongoDB Query Language with `find()`, operators, and aggregation pipelines |
| Update | `UPDATE ... SET ... WHERE ...` | `updateOne()` / `updateMany()` with operators such as `$set` |
| Delete | `DELETE FROM ... WHERE ...` | `deleteOne()` / `deleteMany()` |
| Indexing | B-tree and many other index types; GIN is useful for JSONB | `_id` is indexed by default; secondary indexes can be added to fields |
| Transactions | Strong ACID transaction support across relational data | Supports multi-document transactions; document modeling often reduces the need for cross-document operations |
| Relationships | Native joins and constraints such as foreign keys | Documents are often embedded; `$lookup` can combine collections |
| Flexible data | `JSONB` can store and index flexible/nested fields alongside typed columns | Flexible/nested documents are a core part of the model |

## Experience of inserting and querying
PostgreSQL requires the table structure and data types to be defined first. This makes the data consistent and gives SQL a clear, structured query model. Inserting multiple rows is straightforward, and filters such as branch or enrollment date are concise with `WHERE` conditions.

MongoDB feels more flexible because each student is inserted as a document and the collection does not require the same rigid column definition first. Queries are expressed as document-shaped filters, for example `{ branch: "CSE" }`. This is convenient when records may contain different optional or nested fields.

For this student-management lab, PostgreSQL is well suited to the core student fields because they have a predictable structure. A `JSONB` column can hold optional data such as skills, clubs, metadata, or settings while retaining relational features. MongoDB remains useful when the application is naturally document-shaped and the structure varies substantially between records.

## JSONB takeaway
PostgreSQL `JSONB` stores JSON in a decomposed binary representation that supports indexing and JSON operators. In this lab, adding a `profile JSONB` column provides document-style flexibility without creating a second database system. The GIN index in `jsonb_extension.sql` demonstrates how JSONB content can be indexed for efficient containment queries.
