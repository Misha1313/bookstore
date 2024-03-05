import { Book } from "src/book/entities/book.entity";
import { BaseEntity } from "src/common/entities/base.entity";
import { PaymentAccount } from "src/payment-account/entities/payment-account.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Sale } from "./sale.entity";

@Entity({
    schema: 'sale'
})
export class SaleItem extends BaseEntity {
    @Column()
    saleId: number;

    @ManyToOne(() => Sale, (entity) => entity.saleItems)
    @JoinColumn()
    sale: Sale;

    @Column()
    bookId: number;

    @ManyToOne(() => Book)
    @JoinColumn()
    book: Book;

    @Column({ type: 'numeric' })
    itemPrice: number;

    @Column()
    quantity: number;

}
