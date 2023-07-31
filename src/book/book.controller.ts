import { Body, Controller, DefaultValuePipe, ForbiddenException, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, UseFilters, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { CreateBookDto } from './dtos/create-book.dto';
import { BookService } from './book.service';
import { response } from 'express';
import { HttpExceptionFilter } from 'src/exception-filters/http-exception.filter';
import { ForbiddenExceptionFilter } from 'src/exception-filters/forbidden-exception.filter';
import { ValidationPipe } from './pipes/validation.pipe';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/role.guard';
import { BookInterceptor } from './interceptors/book.interceptor';
import { User } from 'src/decorators/user.decorator';

@Controller('book')
@UseGuards(RolesGuard)
export class BookController {
  constructor(
    private bookService: BookService
  ) {}
  @Get()
  @UseFilters(HttpExceptionFilter, ForbiddenExceptionFilter)
  findAll(@User('name') name: string): string {

      this.bookService.findAll();
      return `Hello ${name}`;

  }

  @Post()
  create(@Body(ValidationPipe) body: CreateBookDto): string {
    this.bookService.create(body);
    return 'This action adds a new cat';
  }

  // play 
  @Get('mock')
  @UseFilters(HttpExceptionFilter, ForbiddenExceptionFilter)
  findAllMock() {

      this.bookService.findAllMock();

  }

  @Get('hi')
  greeting(): string {

      return this.bookService.greeting();

  }

  @Get(':id')
  @Roles('admin')
  @UseInterceptors(BookInterceptor)
  find(@Param('id', new DefaultValuePipe(0), ParseIntPipe) id: string): string {
    return `${id}`;
  }
}

function UsuFilters(): (target: BookController, propertyKey: "findAll", descriptor: TypedPropertyDescriptor<() => string>) => void | TypedPropertyDescriptor<() => string> {
  throw new Error('Function not implemented.');
}
