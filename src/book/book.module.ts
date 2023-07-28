import { Global, Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookRepository } from './book.repository';
import { ValidationPipe } from './pipes/validation.pipe';
import { BookInterceptor } from './interceptors/book.interceptor';

@Global()
@Module({
  controllers: [BookController],
  providers: [
    BookService,
    BookRepository,
    ValidationPipe,
    BookInterceptor
  ],
  exports: [BookService]
})
export class BookModule {}