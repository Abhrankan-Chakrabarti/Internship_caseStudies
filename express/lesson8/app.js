// app.js
const express = require('express');
const InMemoryBookRepository = require('./repositories/InMemoryBookRepository');
const BookService = require('./services/BookService');
const BookController = require('./controllers/BookController');

const app = express();
app.use(express.json());

// Dependency Injection setup
const bookRepository = new InMemoryBookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

// Routes
app.post('/books/:id/borrow', (req, res) => bookController.borrowBook(req, res));
app.post('/books/:id/return', (req, res) => bookController.returnBook(req, res));

const port = 3000;
app.listen(port, () => {
  console.log(`Library system running on port ${port}`);
});
