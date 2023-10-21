import { Author } from "src/book/entities/author.entity";
import { Book } from "src/book/entities/book.entity";
import { Genre } from "src/book/entities/genre.entity";
import { Role } from "src/role/role.entity";
import { User } from "src/user/entities/user.entity";

export const entities = [
    User,
    Role,
    Book,
    Author,
    Genre
]