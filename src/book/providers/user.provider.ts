import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private readonly name: string = 'misha';

  getName(): string {
    return this.name;
  }
}