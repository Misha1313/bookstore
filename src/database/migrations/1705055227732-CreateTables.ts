import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1705055227732 implements MigrationInterface {
    name = 'CreateTables1705055227732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "book"."genre" (
                "id" integer NOT NULL,
                "name" character varying,
                CONSTRAINT "PK_0285d4f1655d080cfcf7d1ab141" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "book"."book" (
                "id" SERIAL NOT NULL,
                "create_date" TIMESTAMP NOT NULL DEFAULT now(),
                "update_date" TIMESTAMP NOT NULL DEFAULT now(),
                "author_id" integer NOT NULL,
                "genre_id" integer NOT NULL,
                "name" character varying NOT NULL,
                "description" character varying NOT NULL,
                "price" numeric NOT NULL,
                CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "book"."author" (
                "id" integer NOT NULL,
                "name" character varying NOT NULL,
                "birth_date" TIMESTAMP NOT NULL,
                CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "role" (
                "id" integer NOT NULL,
                "name" character varying NOT NULL,
                CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user"."user" (
                "id" SERIAL NOT NULL,
                "create_date" TIMESTAMP NOT NULL DEFAULT now(),
                "update_date" TIMESTAMP NOT NULL DEFAULT now(),
                "first_name" character varying NOT NULL,
                "last_name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                "role_id" integer NOT NULL,
                CONSTRAINT "REL_fb2e442d14add3cefbdf33c456" UNIQUE ("role_id"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "sale"."cart_item" (
                "id" SERIAL NOT NULL,
                "create_date" TIMESTAMP NOT NULL DEFAULT now(),
                "update_date" TIMESTAMP NOT NULL DEFAULT now(),
                "user_id" integer NOT NULL,
                "book_id" integer NOT NULL,
                "quantity" integer NOT NULL,
                CONSTRAINT "PK_bd94725aa84f8cf37632bcde997" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "sale"."payment_account_type" (
                "id" integer NOT NULL,
                "name" character varying NOT NULL,
                CONSTRAINT "PK_1b3f368f64fdca64d0b29fd5f26" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "sale"."payment_account" (
                "id" SERIAL NOT NULL,
                "create_date" TIMESTAMP NOT NULL DEFAULT now(),
                "update_date" TIMESTAMP NOT NULL DEFAULT now(),
                "type_id" integer NOT NULL,
                "account" character varying NOT NULL,
                "user_id" integer NOT NULL,
                CONSTRAINT "PK_bb95477ae48c741a9c1445babfd" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "sale"."sale" (
                "id" SERIAL NOT NULL,
                "create_date" TIMESTAMP NOT NULL DEFAULT now(),
                "update_date" TIMESTAMP NOT NULL DEFAULT now(),
                "user_id" integer NOT NULL,
                "payment_account_id" integer NOT NULL,
                CONSTRAINT "PK_d03891c457cbcd22974732b5de2" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "sale"."sale_item" (
                "id" SERIAL NOT NULL,
                "create_date" TIMESTAMP NOT NULL DEFAULT now(),
                "update_date" TIMESTAMP NOT NULL DEFAULT now(),
                "sale_id" integer NOT NULL,
                "book_id" integer NOT NULL,
                "item_price" numeric NOT NULL,
                "quantity" integer NOT NULL,
                CONSTRAINT "PK_439a57a4a0d130329d3d2e671b6" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "book"."book"
            ADD CONSTRAINT "FK_24b753b0490a992a6941451f405" FOREIGN KEY ("author_id") REFERENCES "book"."author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "book"."book"
            ADD CONSTRAINT "FK_f316eed809f6f7617821012ad05" FOREIGN KEY ("genre_id") REFERENCES "book"."genre"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "user"."user"
            ADD CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."cart_item"
            ADD CONSTRAINT "FK_3f1aaffa650d3e443f32459c4c5" FOREIGN KEY ("user_id") REFERENCES "user"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."cart_item"
            ADD CONSTRAINT "FK_000223a640e2a9ccc498781788f" FOREIGN KEY ("book_id") REFERENCES "book"."book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."payment_account"
            ADD CONSTRAINT "FK_1b3f368f64fdca64d0b29fd5f26" FOREIGN KEY ("type_id") REFERENCES "sale"."payment_account_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."payment_account"
            ADD CONSTRAINT "FK_e5c09cb2085b41acb60afba97e7" FOREIGN KEY ("user_id") REFERENCES "sale"."payment_account_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."sale"
            ADD CONSTRAINT "FK_a3f82cec1dac6638fba3e732530" FOREIGN KEY ("user_id") REFERENCES "user"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."sale"
            ADD CONSTRAINT "FK_b8adf72a5f9b5fa158994cefd93" FOREIGN KEY ("payment_account_id") REFERENCES "sale"."payment_account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."sale_item"
            ADD CONSTRAINT "FK_86634f729a5a169e50ab18b98a6" FOREIGN KEY ("sale_id") REFERENCES "sale"."sale"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."sale_item"
            ADD CONSTRAINT "FK_edab317976275f527a11f647fa0" FOREIGN KEY ("book_id") REFERENCES "book"."book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "sale"."sale_item" DROP CONSTRAINT "FK_edab317976275f527a11f647fa0"
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."sale_item" DROP CONSTRAINT "FK_86634f729a5a169e50ab18b98a6"
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."sale" DROP CONSTRAINT "FK_b8adf72a5f9b5fa158994cefd93"
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."sale" DROP CONSTRAINT "FK_a3f82cec1dac6638fba3e732530"
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."payment_account" DROP CONSTRAINT "FK_e5c09cb2085b41acb60afba97e7"
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."payment_account" DROP CONSTRAINT "FK_1b3f368f64fdca64d0b29fd5f26"
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."cart_item" DROP CONSTRAINT "FK_000223a640e2a9ccc498781788f"
        `);
        await queryRunner.query(`
            ALTER TABLE "sale"."cart_item" DROP CONSTRAINT "FK_3f1aaffa650d3e443f32459c4c5"
        `);
        await queryRunner.query(`
            ALTER TABLE "user"."user" DROP CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561"
        `);
        await queryRunner.query(`
            ALTER TABLE "book"."book" DROP CONSTRAINT "FK_f316eed809f6f7617821012ad05"
        `);
        await queryRunner.query(`
            ALTER TABLE "book"."book" DROP CONSTRAINT "FK_24b753b0490a992a6941451f405"
        `);
        await queryRunner.query(`
            DROP TABLE "sale"."sale_item"
        `);
        await queryRunner.query(`
            DROP TABLE "sale"."sale"
        `);
        await queryRunner.query(`
            DROP TABLE "sale"."payment_account"
        `);
        await queryRunner.query(`
            DROP TABLE "sale"."payment_account_type"
        `);
        await queryRunner.query(`
            DROP TABLE "sale"."cart_item"
        `);
        await queryRunner.query(`
            DROP TABLE "user"."user"
        `);
        await queryRunner.query(`
            DROP TABLE "role"
        `);
        await queryRunner.query(`
            DROP TABLE "book"."author"
        `);
        await queryRunner.query(`
            DROP TABLE "book"."book"
        `);
        await queryRunner.query(`
            DROP TABLE "book"."genre"
        `);
    }

}
