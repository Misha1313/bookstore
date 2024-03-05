import { PartialType } from '@nestjs/mapped-types';
import { CreateCartItemDto } from './create-cart-item.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateCartItemDto {

    @ApiProperty({ default: 1 })
    @IsNotEmpty()
    quantity: number;
}
