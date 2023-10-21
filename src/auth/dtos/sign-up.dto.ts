import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumberString } from "class-validator";
import { RoleEnum } from "src/role/roles.enum";

export class SignUpDto {
    
    @ApiProperty({ default: 'misha'})
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({ default: 'marghishvili'})
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({ default: 'marghishvili16@gmail.com'})
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ default: 'Password'})
    @IsNotEmpty()
    password: string;

    @ApiProperty({ default: RoleEnum.User})
    @IsNotEmpty()
    roleId: RoleEnum;

}