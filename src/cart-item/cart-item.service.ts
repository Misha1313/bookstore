import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItem } from './entities/cart-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartItemService {
  constructor(
    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>,

  ) {}

  async create(createCartItemDto: CreateCartItemDto[]) {
    // return this.cartItemRepository.save(createCartItemDto);
    await this.cartItemRepository
      .createQueryBuilder()
      .insert()
      .values(createCartItemDto)
      .execute();
      
  }

  async find(userId: number) {
    return this.cartItemRepository.findBy({
      userId
    })
  }

  async update(id: number, updateCartItemDto: UpdateCartItemDto) {
    return this.cartItemRepository.update(
      { id },
      {
        ...updateCartItemDto
      }
    );
  }

  async remove(id: number) {
    return this.cartItemRepository.delete(id);
  }

  async clear(userId: number) {
    console.log('userId', userId);
    return this.cartItemRepository.delete({ userId });
  }
}
