import { Book } from "src/book/entities/book.entity";
import { BaseEntity } from "src/common/entities/base.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity({
    schema: 'sale'
})
export class CartItem extends BaseEntity {
    @Column()
    userId: number;

    @ManyToOne(() => User)
    @JoinColumn()
    user: User;

    @Column()
    bookId: number;

    @ManyToOne(() => Book)
    @JoinColumn()
    book: Book;

    @Column()
    quantity: number;

}
