import { Body, Controller, DefaultValuePipe, ForbiddenException, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, UseFilters, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { CreateBookDto } from './dtos/create-book.dto';
import { BookService } from './book.service';
import { HttpExceptionFilter } from 'src/exception-filters/http-exception.filter';
import { ForbiddenExceptionFilter } from 'src/exception-filters/forbidden-exception.filter';
import { BookInterceptor } from './interceptors/book.interceptor';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Roles } from 'src/role/role.decorator';
import { RoleEnum } from 'src/role/roles.enum';
import { RolesGuard } from 'src/role/role.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('book')
@UseInterceptors(CacheInterceptor)
export class BookController {
  constructor(
    private bookService: BookService
  ) {}

  @Post()
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard, RolesGuard)
  @Roles(RoleEnum.Admin)
  async create(@Body() body: CreateBookDto) {
  
    return this.bookService.create(body);
  }

  @Get()
  @UseFilters(HttpExceptionFilter, ForbiddenExceptionFilter)
  // findAll(@User('name') name: string): string {
  async findAll() {

      return this.bookService.findAll();

  }

  // play 
  // @Get('mock')
  // @UseFilters(HttpExceptionFilter, ForbiddenExceptionFilter)
  // findAllMock() {

  //     this.bookService.findAllMock();

  // }

  // @Get('hi')
  // greeting(): string {
  //     return this.bookService.greeting();
  // }

  @Get(':id')
  @UseInterceptors(BookInterceptor)
  find(@Param('id', new DefaultValuePipe(0), ParseIntPipe) id: string): string {
    return `${id}`;
  }
}

function UsuFilters(): (target: BookController, propertyKey: "findAll", descriptor: TypedPropertyDescriptor<() => string>) => void | TypedPropertyDescriptor<() => string> {
  throw new Error('Function not implemented.');
}
