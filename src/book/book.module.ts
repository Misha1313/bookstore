import { Global, Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookInterceptor } from './interceptors/book.interceptor';
import { BookRepositoryMock } from './mocks/book-repository.mock';
import { CustomProviderEnum } from 'src/common/enums/custom-provider.enum';
import { GreetingProvider } from './custom-providers/greeting.custom-providers';
import { LogModule } from 'src/common/log/log.module';
import { ProviderRepository } from './providers/user.provider';
import { AuthModule } from 'src/auth/auth.module';
import { RoleModule } from 'src/role/role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Author } from './entities/author.entity';
import { Genre } from './entities/genre.entity';
import { Book } from './entities/book.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Book,
      Author,
      Genre
    ]),
    LogModule,
    AuthModule,
    RoleModule
  ],
  controllers: [BookController],
  providers: [
    BookService,
    {
      provide: CustomProviderEnum.BookRepositoryMock,
      useValue: BookRepositoryMock
    },
    BookInterceptor,
    GreetingProvider,
    ProviderRepository
  ],
  exports: [BookService]
})
export class BookModule {}