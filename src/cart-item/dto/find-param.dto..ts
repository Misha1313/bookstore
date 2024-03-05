import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class FindParamDto {

    @ApiProperty({ default: 1 })
    userId: number;

}