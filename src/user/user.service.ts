import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import { SignUpDto } from 'src/auth/dtos/sign-up.dto';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {

  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async create(user: CreateUserDto) {

    return this.userRepository.saveInDb(user);
  }

  findAll() {

    return this.userRepository.findAll();
  }

  findById(
    userId: number
  ) {
    return this.userRepository.findOneBy({ id: userId });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({
      email
    })
  }

  
}