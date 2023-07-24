import { Injectable } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { Book } from './types/book.type';

@Injectable()
export class BookService {
  constructor(
    private readonly bookRepository: BookRepository
  ) {}

  create(book: Book) {
    this.bookRepository.create(book);
  }

  findAll(): Book[] {
    return this.bookRepository.findAll();
  }
}