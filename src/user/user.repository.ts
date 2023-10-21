import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { BaseRepository } from 'src/common/repositories/base.repository';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserRepository extends BaseRepository<User>{
  constructor(
    @InjectRepository(User)
    repository: Repository<User>
  ) {
    super(repository);
  }

  async saveInDb(user: CreateUserDto) {
    const entity = this.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      roleId: user.roleId
    });

    return this.save(entity);
  }

  findAll() {
    return this.find();
  }
}