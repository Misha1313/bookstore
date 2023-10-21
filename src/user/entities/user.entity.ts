import { Exclude, Expose } from "class-transformer";
import { BaseEntity } from "src/common/entities/base.entity";
import { Role } from "src/role/role.entity";
import { RoleEnum } from "src/role/roles.enum";
import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from "bcrypt";
import { ConfigService } from "@nestjs/config";

@Entity({
    schema: 'users'
})
export class User extends BaseEntity {
    // constructor(partial: Partial<UserEntity>) {
    //     Object.assign(this, partial);
    // }


    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    roleId: number;

    @OneToOne(() => Role)
    @JoinColumn()
    role: Role;

    @Expose()
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(
            this.password,
            10
        );
    }
    
}