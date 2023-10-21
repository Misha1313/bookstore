import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreateBookDto {
    @ApiProperty({ default: 'The Great Gatsby' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ default: 'One of the most famous books' })
    @IsNotEmpty()
    description: string;

    @ApiProperty({ default: 1 })
    @IsNotEmpty()
    authorId: number;

    @ApiProperty({ default: 1 })
    @IsNotEmpty()
    genreId: number;

    @ApiProperty({ default: 10 })
    @IsNotEmpty()
    price: number;
}