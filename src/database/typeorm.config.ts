import { Role } from "src/role/role.entity";
import { User } from "../user/entities/user.entity";
import { DataSource } from "typeorm";
import { entities } from "./entities";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { migrations } from "./migrations";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    namingStrategy: new SnakeNamingStrategy(),
    entities: entities,
    migrations,
    synchronize: true
});