import { Global, Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookRepository } from './book.repository';

@Global()
@Module({
  controllers: [BookController],
  providers: [BookService, BookRepository],
  exports: [BookService]
})
export class BookModule {}