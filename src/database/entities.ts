import { Author } from "src/book/entities/author.entity";
import { Book } from "src/book/entities/book.entity";
import { Genre } from "src/book/entities/genre.entity";
import { CartItem } from "src/cart-item/entities/cart-item.entity";
import { PaymentAccountType } from "src/payment-account/entities/payment-account-type.entity";
import { PaymentAccount } from "src/payment-account/entities/payment-account.entity";
import { Role } from "src/role/role.entity";
import { SaleItem } from "src/sale/entities/sale-item.entity";
import { Sale } from "src/sale/entities/sale.entity";
import { User } from "src/user/entities/user.entity";

export const entities = [
    User,
    Role,
    Book,
    Author,
    Genre,
    CartItem,
    PaymentAccount,
    PaymentAccountType,
    Sale,
    SaleItem
]