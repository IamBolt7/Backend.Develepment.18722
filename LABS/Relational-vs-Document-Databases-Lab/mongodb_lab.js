// Relational vs Document Databases Lab
// Run inside mongosh.

use student_management

db.students.insertMany([
  { name: "Alice Sharma", branch: "CSE", email: "alice@example.com", enrollment_date: new Date("2024-01-15") },
  { name: "Bilal Khan", branch: "ECE", email: "bilal@example.com", enrollment_date: new Date("2023-08-10") },
  { name: "Carla Gomez", branch: "CSE", email: "carla@example.com", enrollment_date: new Date("2024-03-02") }
])

// Students in CSE
db.students.find({ branch: "CSE" })

// Students enrolled after January 2024
db.students.find({ enrollment_date: { $gt: new Date("2024-01-31") } })

// Update a branch
db.students.updateOne(
  { email: "bilal@example.com" },
  { $set: { branch: "AI/ML" } }
)

// Delete a record
db.students.deleteOne({ email: "carla@example.com" })

// View remaining documents
db.students.find()
