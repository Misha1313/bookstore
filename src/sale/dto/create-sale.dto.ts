import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { CreateSaleItemDto } from "./create-sale-item.dto";

export class CreateSaleDto {
    @ApiProperty({ default: 1 })
    @IsNotEmpty()
    userId: number;

    @ApiProperty({ default: 1 })
    @IsNotEmpty()
    paymentAccountId: number;

    @ApiProperty({ type: [CreateSaleItemDto] })
    @IsNotEmpty()
    saleItems: CreateSaleItemDto[];

}


