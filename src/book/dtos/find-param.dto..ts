import { ApiPropertyOptional } from "@nestjs/swagger";

export class FindParamDto {

    @ApiPropertyOptional()
    name: string;

    @ApiPropertyOptional()
    authorId: number;

    @ApiPropertyOptional()
    genreId: number;

    @ApiPropertyOptional({ default: 1 })
    pageNumber: number;

    @ApiPropertyOptional({ default: 1 })
    pageItemsNumber: number;

}