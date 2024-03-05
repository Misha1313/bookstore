import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class UserProducerService {

  constructor(
    @Inject('TEST_SERVICE') private clientKafka: ClientKafka,
  ) {}

  async publishEvent() {
    this.clientKafka.emit('test-topic', { name : 'event is published' });
  }


  
}