// controllers/BookController.js
const BookService = require('../services/BookService');

class BookController {
  constructor(bookService) {
    this.bookService = bookService;
  }

  async borrowBook(req, res) {
    try {
      const book = await this.bookService.borrowBook(req.params.id);
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async returnBook(req, res) {
    try {
      const book = await this.bookService.returnBook(req.params.id);
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = BookController;
