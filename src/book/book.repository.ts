import { Injectable } from '@nestjs/common';
import { Book } from './types/book.type';

@Injectable()
export class BookRepository {
  private readonly books: Book[] = [];

  create(book: Book) {
    this.books.push(book);
  }

  findAll(): Book[] {
    return this.books;
  }
}