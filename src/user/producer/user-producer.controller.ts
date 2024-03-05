import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserProducerService } from './user-producer.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@ApiTags('user')
@Controller('user-producer')
export class UserProducerController {
  constructor(
    private readonly userProducerService: UserProducerService
  ) {

  }

  @Post()
  async publishEvent() {
    
    return this.userProducerService.publishEvent();
  }

  @EventPattern('test-topic')
  async handleUser(@Payload() data: any) {
    console.log('message', data);
    console.log('message', data);
    console.log('message', data);
    console.log('message', data);
    console.log('message', data);
    console.log('message', data);
  }

}