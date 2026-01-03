// repositories/interfaces/IBookRepository.js
// Repository interface definition
class IBookRepository {
  async findAll() { throw new Error("Not implemented"); }
  async findById(id) { throw new Error("Not implemented"); }
  async save(book) { throw new Error("Not implemented"); }
}

module.exports = IBookRepository;
