import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class SignInDto {

    @ApiProperty({ default: 'marghishvili16@gmail.com'})
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ default: 'Password'})
    @IsNotEmpty()
    password: string;

}