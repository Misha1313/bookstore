import { Book } from "src/book/entities/book.entity";
import { BaseEntity } from "src/common/entities/base.entity";
import { PaymentAccount } from "src/payment-account/entities/payment-account.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { SaleItem } from "./sale-item.entity";

@Entity({
    schema: 'sale'
})
export class Sale extends BaseEntity {
    @Column()
    userId: number;

    @ManyToOne(() => User)
    @JoinColumn()
    user: User;

    @Column()
    paymentAccountId: number;

    @ManyToOne(() => PaymentAccount)
    @JoinColumn()
    paymentAccount: PaymentAccount;

    @OneToMany(() => SaleItem, (entity) => entity.sale, {
        cascade: true
    })
    saleItems: SaleItem[]



}
