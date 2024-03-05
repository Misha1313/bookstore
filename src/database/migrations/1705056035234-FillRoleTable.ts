import { Role } from "src/role/role.entity"
import { MigrationInterface, QueryRunner } from "typeorm"

export class FillRoleTable1705056035234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const roleRepository = queryRunner.manager.getRepository(Role);
        const roleList : Partial<Role>[] = [
            {
                id: 1,
                name: 'user'
            },
            {
                id: 2,
                name: 'admin'
            }
        ];

        await roleRepository.insert(roleList);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
