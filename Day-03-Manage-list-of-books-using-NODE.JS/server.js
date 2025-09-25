const express = require("express");
const app = express();
app.use(express.json()); // so we can read JSON from POST/PUT

// demo data
let books = [
  { id: 1, title: "First Book", author: "Nishant" },
  { id: 2, title: "Second Book", author: "Someone" },
];

// root route
app.get("/", (req, res) => {
  res.send("Day-03 Books API is up");
});

// GET all books here
app.get("/books", (req, res) => {
  res.json(books);
});

// POST add new book
app.post("/books", (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book by id
app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === bookId);
  if (index === -1) return res.status(404).send("Book not found");
  books[index] = { id: bookId, ...req.body };
  res.json(books[index]);
});

// DELETE book by id
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter((b) => b.id !== bookId);
  res.send("Book deleted");
});

// start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
