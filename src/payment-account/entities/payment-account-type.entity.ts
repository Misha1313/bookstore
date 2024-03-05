import { Book } from "src/book/entities/book.entity";
import { BaseEntity } from "src/common/entities/base.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({
    schema: 'sale'
})
export class PaymentAccountType {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

}

