import { Exclude, Expose } from "class-transformer";
import { BaseEntity } from "src/common/entities/base.entity";
import { RoleEnum } from "src/role/roles.enum";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
    
}