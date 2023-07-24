import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Param, Post, Req, UseFilters } from '@nestjs/common';
import { CreateBookDto } from './dtos/create-book.dto';
import { BookService } from './book.service';
import { response } from 'express';
import { HttpExceptionFilter } from 'src/exception-filters/http-exception.filter';
import { ForbiddenExceptionFilter } from 'src/exception-filters/forbidden-exception.filter';

@Controller('book')
export class BookController {
  constructor(
    private bookService: BookService
  ) {}
  @Get()
  @UseFilters(HttpExceptionFilter, ForbiddenExceptionFilter)
  findAll(): string {

      throw new ForbiddenException('Forbidden');
      this.bookService.findAll();
      return 'This action returns all books';

  }

  @Get(':id')
  find(@Param('id') id: string): string {
    return 'This action returns all books';
  }

  @Post()
  create(@Body() body: CreateBookDto): string {
    this.bookService.create(body);
    return 'This action adds a new cat';
  }
}

function UsuFilters(): (target: BookController, propertyKey: "findAll", descriptor: TypedPropertyDescriptor<() => string>) => void | TypedPropertyDescriptor<() => string> {
  throw new Error('Function not implemented.');
}
