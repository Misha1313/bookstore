import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices'
import { UserConsumerController } from './user-consumer.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TEST_SERVICEssss',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero-consume',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'hero-consumerss'
          }
        }
      },
    ]),
    
  ],
  controllers: [
    UserConsumerController
  ]
})
export class UserConsumerModule {}