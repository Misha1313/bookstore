import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateBookDto } from './dtos/create-book.dto';

@Controller('book')
export class BookController {
  @Get()
  findAll(): string {
    return 'This action returns all books';
  }

  @Post()
  create(@Body() body: CreateBookDto): string {
    return 'This action adds a new cat';
  }
}