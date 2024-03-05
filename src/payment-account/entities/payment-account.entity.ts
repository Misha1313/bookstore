import { Book } from "src/book/entities/book.entity";
import { BaseEntity } from "src/common/entities/base.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { PaymentAccountType } from "./payment-account-type.entity";

@Entity({
    schema: 'sale'
})
export class PaymentAccount extends BaseEntity {

    @Column()
    typeId: number;

    @ManyToOne(() => PaymentAccountType)
    @JoinColumn()
    type: PaymentAccountType;

    @Column()
    account: string;
    
    @Column()
    userId: number;

    @ManyToOne(() => PaymentAccountType)
    @JoinColumn()
    user: User;


}

