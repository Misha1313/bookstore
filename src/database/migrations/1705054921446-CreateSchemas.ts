import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateSchemas1705054921446 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE SCHEMA book;
        `);

        await queryRunner.query(`
            CREATE SCHEMA "user";
        `);

        await queryRunner.query(`
            CREATE SCHEMA sale;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            DROP SCHEMA book;
        `);

        await queryRunner.query(`
            DROP SCHEMA "user";
        `);

        await queryRunner.query(`
            DROP SCHEMA sale;
        `);
    }

}
