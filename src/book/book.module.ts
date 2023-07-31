import { Global, Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookRepository } from './book.repository';
import { ValidationPipe } from './pipes/validation.pipe';
import { BookInterceptor } from './interceptors/book.interceptor';
import { BookRepositoryMock } from './mocks/book-repository.mock';
import { CustomProviderEnum } from 'src/common/enums/custom-provider.enum';
import { UserRepository } from './providers/user.provider';
import { GreetingProvider } from './custom-providers/greeting.custom-providers';

@Global()
@Module({
  controllers: [BookController],
  providers: [
    BookService,
    BookRepository,
    {
      provide: CustomProviderEnum.BookRepositoryMock,
      useValue: BookRepositoryMock
    },
    ValidationPipe,
    BookInterceptor,
    UserRepository,
    GreetingProvider
  ],
  exports: [BookService]
})
export class BookModule {}