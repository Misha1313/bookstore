import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumberString } from "class-validator";

export class UpdateBookDto {
    @ApiProperty({ default: 1 })
    @IsNotEmpty()
    id: number;

    @ApiProperty({ default: 'The Great Gatsby' })
    name: string;

    @ApiProperty({ default: 'One of the most famous books' })
    description: string;

    @ApiProperty({ default: 1 })
    authorId: number;

    @ApiProperty({ default: 1 })
    genreId: number;

    @ApiProperty({ default: 10 })
    @IsNotEmpty()
    price: number;
}