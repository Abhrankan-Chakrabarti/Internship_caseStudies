// repositories/InMemoryBookRepository.js
const IBookRepository = require('./interfaces/IBookRepository');
const Book = require('../models/Book');

class InMemoryBookRepository extends IBookRepository {
  constructor() {
    super();
    this.books = [
      new Book("1", "1984", "George Orwell"),
      new Book("2", "Brave New World", "Aldous Huxley")
    ];
  }

  async findAll() {
    return this.books;
  }

  async findById(id) {
    return this.books.find(book => book.id === id) || null;
  }

  async save(book) {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
    } else {
      this.books.push(book);
    }
  }
}

module.exports = InMemoryBookRepository;
