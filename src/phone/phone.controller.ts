import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { BookService } from 'src/book/book.service';


@Controller('phone')
export class PhoneController {
  constructor(
    private bookService: BookService
  ) {}
  @Get()
  findAll(): string {
    this.bookService.findAll();
    return 'This action returns all books';
  }

}