import { Exclude, Expose } from "class-transformer";
import { BaseEntity } from "src/common/entities/base.entity";
import { Role } from "src/role/role.entity";
import { AfterLoad, BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Author } from "./author.entity";
import { Genre } from "./genre.entity";

@Entity({
    schema: 'book'
})
export class Book extends BaseEntity {
    @Column()
    authorId: number;

    @ManyToOne(() => Author, (entity) => entity.books)
    @JoinColumn()
    author: Author;

    @Column()
    genreId: number;

    @ManyToOne(() => Genre, (entity) => entity.books)
    @JoinColumn()
    genre: Genre;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: 'numeric' })
    price: number;

    @AfterLoad()
    convertStringToInt() {
        this.price = parseFloat(this.price.toString());
    }
    
}