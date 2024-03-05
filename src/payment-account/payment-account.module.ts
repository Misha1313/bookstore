import { Module } from '@nestjs/common';
import { PaymentAccountService } from './payment-account.service';
import { PaymentAccountController } from './payment-account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentAccount } from './entities/payment-account.entity';
import { PaymentAccountType } from './entities/payment-account-type.entity';

@Module({
imports: [
  TypeOrmModule.forFeature([
    PaymentAccount,
    PaymentAccountType
  ])
],
  controllers: [PaymentAccountController],
  providers: [PaymentAccountService]
})
export class PaymentAccountModule {}
