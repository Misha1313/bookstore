import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCartItemDto {
    
    @ApiProperty({ default: 1 })
    @IsNotEmpty()
    userId: number;

    @ApiProperty({ default: 1 })
    @IsNotEmpty()
    bookId: number;

    @ApiProperty({ default: 1 })
    @IsNotEmpty()
    quantity: number;
}
