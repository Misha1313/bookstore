import { Inject, Injectable } from '@nestjs/common';
import { CustomProviderEnum } from 'src/common/enums/custom-provider.enum';
import { LogService } from 'src/common/log/log.service';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from './types/config.type';
import { CreateBookDto } from './dtos/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindParamDto } from './dtos/find-param.dto.';
import { Book } from './entities/book.entity';
import { UpdateBookDto } from './dtos/update-book.dto';

@Injectable()
export class BookService {
  constructor(
    // @Inject(CustomProviderEnum.BookRepositoryMock)
    // private readonly bookRepositoryMock: BookRepository,
    @Inject(CustomProviderEnum.Greeing)
    private readonly greetingText: string,
    private readonly logService: LogService,
    private readonly configService: ConfigService<ConfigType>,
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,

  ) {}

  async create(book: CreateBookDto) {

    return this.bookRepository.save(book);
  }

  async update(book: UpdateBookDto) {

    return this.bookRepository.save(book);
  }

  async delete(bookId: number) {

    return this.bookRepository.softDelete(bookId);
  }

  async findAll(findParamDto: FindParamDto) {
    const port = this.configService.get<number>('DATABASE_PORT', 5555);
    const host = this.configService.get('DATABASE_HOST', { infer: true });

    console.log('findParamDto', findParamDto);

    console.log('type', typeof findParamDto.authorId);

    const data = await this.bookRepository
      .createQueryBuilder('u')
      .leftJoin('u.genre', 'g')
      .leftJoin('u.author', 'a')
      .where('(UPPER(u.name) LIKE :like::TEXT OR :name::TEXT IS NULL)', {
        like: `%${findParamDto.name}%`.toUpperCase(),
        name: findParamDto.name
      })
      .andWhere('(u.authorId = :authorId OR :authorId::INTEGER IS NULL)', {
        authorId: findParamDto.authorId
      })
      .andWhere('(u.genreId = :genreId OR :genreId::INTEGER IS NULL)', {
        genreId: findParamDto.genreId
      })
      .orderBy('u.id')
      .take(findParamDto.pageItemsNumber)
      .skip(
        (findParamDto.pageNumber - 1) * findParamDto.pageItemsNumber
      )
      .cache(true)
      .getMany();

    console.log('BookService.findall', data);

    return data;
      
  }

  async findById(bookId: number) {
    console.log('bookId', bookId);
    const data = await this.bookRepository
      .createQueryBuilder('b')
      .leftJoin('b.genre', 'g')
      .leftJoin('b.author', 'a')
      .where('b.id = :bookId', { bookId })
      .getOne();

    return data; 
      
  };

  // practice
  findAllMock() {
    // this.bookRepositoryMock.findAll();
  }

  greeting(): string {
    return this.greetingText;
  }
}