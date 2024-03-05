import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Ctx, EventPattern, KafkaContext, Payload } from '@nestjs/microservices';

@Controller()
export class UserConsumerController {
  constructor(
  ) {

  }

  @EventPattern('test-topic')
  async handleUser(@Payload() data: any, @Ctx() context: KafkaContext) {
    
    console.log('message', data);
    console.log('message', data);
    console.log('message', data);
    console.log('message', data);
    console.log('message', data);
  }

}