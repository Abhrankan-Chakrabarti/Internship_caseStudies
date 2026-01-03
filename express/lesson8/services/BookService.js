// services/BookService.js
class BookService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async borrowBook(bookId) {
    const book = await this.bookRepository.findById(bookId);
    if (!book) throw new Error("Book not found");
    if (book.isBorrowed) throw new Error("Book already borrowed");

    const updatedBook = { ...book, isBorrowed: true };
    await this.bookRepository.save(updatedBook);
    return updatedBook;
  }

  async returnBook(bookId) {
    const book = await this.bookRepository.findById(bookId);
    if (!book) throw new Error("Book not found");
    if (!book.isBorrowed) throw new Error("Book is not currently borrowed");

    const updatedBook = { ...book, isBorrowed: false };
    await this.bookRepository.save(updatedBook);
    return updatedBook;
  }
}

module.exports = BookService;
