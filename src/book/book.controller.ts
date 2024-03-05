import { Body, Controller, DefaultValuePipe, Delete, ForbiddenException, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, Req, UseFilters, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { CreateBookDto } from './dtos/create-book.dto';
import { BookService } from './book.service';
import { HttpExceptionFilter } from 'src/exception-filters/http-exception.filter';
import { ForbiddenExceptionFilter } from 'src/exception-filters/forbidden-exception.filter';
import { BookInterceptor } from './interceptors/book.interceptor';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Roles } from 'src/role/role.decorator';
import { RoleEnum } from 'src/role/roles.enum';
import { RolesGuard } from 'src/role/role.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { FindParamDto } from './dtos/find-param.dto.';
import { UpdateBookDto } from './dtos/update-book.dto';

@ApiTags('book')
@Controller('book')
// @UseInterceptors(CacheInterceptor)
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
  // findAll(@User('name') name: string): string {
  async find(
    @Query() findParamDto: FindParamDto
  ) {
    
    return this.bookService.findAll(findParamDto);

  }

  @Get(':id')
  // @UseInterceptors(BookInterceptor)
  // findById(@Param('id', new DefaultValuePipe(0), ParseIntPipe) id: string): string {
  async findById(@Param('id', new DefaultValuePipe(1)) id: number) {
    return this.bookService.findById(id);
  }

  @Put()
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard, RolesGuard)
  @Roles(RoleEnum.Admin)
  async update(@Body() body: UpdateBookDto) {
  
    return this.bookService.create(body);
  }

  @Delete(':id')
  // @UseInterceptors(BookInterceptor)
  // findById(@Param('id', new DefaultValuePipe(0), ParseIntPipe) id: string): string {
  async delete(@Param('id') id: number) {
    return this.bookService.delete(id);
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

}

function UsuFilters(): (target: BookController, propertyKey: "findAll", descriptor: TypedPropertyDescriptor<() => string>) => void | TypedPropertyDescriptor<() => string> {
  throw new Error('Function not implemented.');
}
