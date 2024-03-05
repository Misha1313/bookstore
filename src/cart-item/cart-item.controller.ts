import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { FindParamDto } from './dto/find-param.dto.';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@ApiTags('cart')
// @UseGuards(AuthGuard)
@Controller('cart')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Post()
  @ApiBody({ type: [CreateCartItemDto] })
  async create(@Body() createCartItemDto: CreateCartItemDto[]) {
    return this.cartItemService.create(createCartItemDto);
  }

  @Get(':userId')
  async find(@Param('userId') findParamDto: FindParamDto) {
    return this.cartItemService.find(findParamDto.userId);
  }

  
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateCartItemDto: UpdateCartItemDto) {
    return this.cartItemService.update(id, updateCartItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    
    return this.cartItemService.remove(id);
  }

  @Delete('clear/:userId')
  async clear(@Param('userId') userId: number) {
    
    return this.cartItemService.clear(userId);
  }
}
