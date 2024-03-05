import { Global, Module } from '@nestjs/common';
import { UserProducerController } from './user-producer.controller';
import { UserProducerService } from './user-producer.service';
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TEST_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'hero-consumer'
          }
        }
      },
    ]),
    
  ],
  controllers: [
    UserProducerController
  ],
  providers: [
    UserProducerService
  ]
})
export class UserProducerModule {}