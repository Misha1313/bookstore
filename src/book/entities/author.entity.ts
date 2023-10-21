import { Exclude, Expose } from "class-transformer";
import { Book } from "src/book/entities/book.entity";
import { BaseEntity } from "src/common/entities/base.entity";
import { Role } from "src/role/role.entity";
import { RoleEnum } from "src/role/roles.enum";
import { AfterLoad, BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    schema: 'book'
})
export class Author {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    birthDate: Date;

    @OneToMany(() => Book, (entity) => entity.author)
    books: Book[];
    
}