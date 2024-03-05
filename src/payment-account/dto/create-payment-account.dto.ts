import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreatePaymentAccountDto {

    @ApiProperty({ default: 1 })
    @IsNotEmpty()
    typeId: number;

    @ApiProperty({ default: 'margishvili16@gmail.com' })
    @IsNotEmpty()
    account: string;

    @ApiProperty({ default: 1 })
    @IsNotEmpty()
    userId: number;

}