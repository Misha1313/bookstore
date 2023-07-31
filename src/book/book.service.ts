import { Inject, Injectable } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { Book } from './types/book.type';
import { CustomProviderEnum } from 'src/common/enums/custom-provider.enum';

@Injectable()
export class BookService {
  constructor(
    private readonly bookRepository: BookRepository,
    @Inject(CustomProviderEnum.BookRepositoryMock)
    private readonly bookRepositoryMock: BookRepository,
    @Inject(CustomProviderEnum.Greeing)
    private readonly greetingText: string
  ) {}

  create(book: Book) {
    this.bookRepository.create(book);
  }

  findAll(): Book[] {
    return this.bookRepository.findAll();
  }

  findAllMock() {
    this.bookRepositoryMock.findAll();
  }

  greeting(): string {
    return this.greetingText;
  }
}