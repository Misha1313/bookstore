import { Injectable } from '@nestjs/common';

@Injectable()
export class ProviderRepository {
  private readonly name: string = 'misha';

  getName(): string {
    return this.name;
  }
}