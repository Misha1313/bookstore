import { Repository } from 'typeorm';

export abstract class BaseRepository<Entity> extends Repository<Entity> {
  constructor(repository: Repository<Entity>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
