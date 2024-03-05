import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';
import { UserProducerModule } from './producer/user-producer.module';
import { UserConsumerModule } from './consumer/user-consumer.module';


@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User
    ]),
    UserProducerModule
    // UserConsumerModule
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