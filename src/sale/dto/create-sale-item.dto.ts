import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateSaleItemDto {
    
    @ApiProperty({ default: 1 })
    @IsNotEmpty()
    bookId: number;

    @ApiProperty({ default: 1 })
    @IsNotEmpty()
    quantity: number;

    @ApiProperty({ default: 10.99 })
    @IsNotEmpty()
    itemPrice: number;

}


