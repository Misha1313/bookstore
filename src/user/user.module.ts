import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';


@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User
    ])
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    UserRepository
  ],
  exports: [
    UserService,
    UserRepository
  ]
})
export class UserModule {}