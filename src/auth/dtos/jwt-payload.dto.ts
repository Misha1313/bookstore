import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class JwtPayloadDto {
    sub: number;
    email: string;
}