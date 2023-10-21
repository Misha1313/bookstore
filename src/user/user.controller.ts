import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {

  }
  @Get()
  getAll() {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() user: CreateUserDto) {
    
    return this.userService.create(user);
  }

}