import { Module } from "@nestjs/common";
import { RolesGuard } from "./role.guard";
import { APP_GUARD } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Role } from "./role.entity";



@Module({
    imports: [
        TypeOrmModule.forFeature([
            Role
          ])
    ],
    providers: [
        RolesGuard
    ],
    exports: [
        RolesGuard
    ]


})
export class RoleModule {}
