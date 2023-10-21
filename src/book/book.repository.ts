import { Injectable } from '@nestjs/common';
import { Book } from './types/book.type';
import { CreateBookDto } from './dtos/create-book.dto';

@Injectable()
export class BookRepository {

  saveInDb(book: CreateBookDto) {
    // const entity =
    // this.books.push(book);
  }

  findAll(): Book[] {
    return [new Book()];
  }
}