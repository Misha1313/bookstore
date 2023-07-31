import { BookRepository } from "../book.repository";
import { Book } from "../types/book.type";

export const BookRepositoryMock = {
  books: [],
  create(book: Book) {
    this.books.push(book);
  },

  findAll() {
    console.log('BookRepositoryMock');
  }
}