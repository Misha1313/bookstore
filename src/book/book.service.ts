import { Inject, Injectable } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { Book } from './types/book.type';
import { CustomProviderEnum } from 'src/common/enums/custom-provider.enum';
import { LogService } from 'src/common/log/log.service';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from './types/config.type';
import { CreateBookDto } from './dtos/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @Inject(CustomProviderEnum.BookRepositoryMock)
    private readonly bookRepositoryMock: BookRepository,
    @Inject(CustomProviderEnum.Greeing)
    private readonly greetingText: string,
    private readonly logService: LogService,
    private readonly configService: ConfigService<ConfigType>,
    @InjectRepository(Book)
    private bookRepository: Repository<Book>
  ) {}

  async create(book: CreateBookDto) {

    return this.bookRepository.save(book);

  }

  async findAll() {
    const port = this.configService.get<number>('DATABASE_PORT', 5555);
    const host = this.configService.get('DATABASE_HOST', { infer: true });
    console.log('db port', port);
    console.log('port from custom config', port);

    this.logService.logInConsole();
    return this.bookRepository.find();
  }

  findAllMock() {
    this.bookRepositoryMock.findAll();
  }

  greeting(): string {
    return this.greetingText;
  }
}