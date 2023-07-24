import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { PhoneModule } from './phone/phone.module';
import { AuthModule } from './book/auth/auth.module';

@Module({
  imports: [BookModule, PhoneModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
