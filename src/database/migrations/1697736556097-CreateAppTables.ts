import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAppTables1697736556097 implements MigrationInterface {
    name = 'CreateAppTables1697736556097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE SCHEMA IF NOT EXISTS users;
        `);
        await queryRunner.query(`
            CREATE SCHEMA IF NOT EXISTS book;
        `);

        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "create_date" TIMESTAMP NOT NULL DEFAULT now(), "update_date" TIMESTAMP NOT NULL DEFAULT now(), "delete_date" TIMESTAMP, "name" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book"."genre" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_0285d4f1655d080cfcf7d1ab141" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book"."book" ("id" SERIAL NOT NULL, "create_date" TIMESTAMP NOT NULL DEFAULT now(), "update_date" TIMESTAMP NOT NULL DEFAULT now(), "delete_date" TIMESTAMP, "author_id" integer NOT NULL, "genre_id" integer NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" numeric NOT NULL, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book"."author" ("id" integer NOT NULL, "name" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users"."user" ("id" SERIAL NOT NULL, "create_date" TIMESTAMP NOT NULL DEFAULT now(), "update_date" TIMESTAMP NOT NULL DEFAULT now(), "delete_date" TIMESTAMP, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role_id" integer NOT NULL, CONSTRAINT "REL_fb2e442d14add3cefbdf33c456" UNIQUE ("role_id"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "book"."book" ADD CONSTRAINT "FK_24b753b0490a992a6941451f405" FOREIGN KEY ("author_id") REFERENCES "book"."author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "book"."book" ADD CONSTRAINT "FK_f316eed809f6f7617821012ad05" FOREIGN KEY ("genre_id") REFERENCES "book"."genre"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "book"."book" ADD CONSTRAINT "FK_556f1b892dc7a8e5c4fed9fa756" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users"."user" ADD CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users"."user" DROP CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561"`);
        await queryRunner.query(`ALTER TABLE "book"."book" DROP CONSTRAINT "FK_556f1b892dc7a8e5c4fed9fa756"`);
        await queryRunner.query(`ALTER TABLE "book"."book" DROP CONSTRAINT "FK_f316eed809f6f7617821012ad05"`);
        await queryRunner.query(`ALTER TABLE "book"."book" DROP CONSTRAINT "FK_24b753b0490a992a6941451f405"`);
        await queryRunner.query(`DROP TABLE "users"."user"`);
        await queryRunner.query(`DROP TABLE "book"."author"`);
        await queryRunner.query(`DROP TABLE "book"."book"`);
        await queryRunner.query(`DROP TABLE "book"."genre"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
