import { BookType } from "../types/book.type";

export const BookRepositoryMock = {
  books: [],
  create(book: BookType) {
    this.books.push(book);
  },

  findAll() {
    console.log('BookRepositoryMock');
  }
}