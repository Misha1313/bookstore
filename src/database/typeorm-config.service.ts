import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { migrations } from "./migrations";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(
        private readonly configService: ConfigService
    ){}
    createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
        type: 'postgres',
        host: this.configService.get('DATABASE_HOST'),
        port: this.configService.get('DATABASE_PORT'),
        username: this.configService.get('DATABASE_USER'),
        password: this.configService.get('DATABASE_PASSWORD'),
        database: this.configService.get('DATABASE'),
        namingStrategy: new SnakeNamingStrategy(),
        migrationsTableName: 'migrations',
        entities: [],
        migrations,
        synchronize: false,
        autoLoadEntities: true,
        cache: {
            duration: 3 * 60 * 1000
        },
        logging: "all"

    };
  }
}