import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumberString } from "class-validator";
import { RoleEnum } from "src/role/roles.enum";

export class CreateUserDto {
    
    @ApiProperty()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ default: RoleEnum.User })
    @IsNotEmpty()
    roleId: RoleEnum;

}