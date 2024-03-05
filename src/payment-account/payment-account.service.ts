import { Injectable } from '@nestjs/common';
import { CreatePaymentAccountDto } from './dto/create-payment-account.dto';
import { UpdatePaymentAccountDto } from './dto/update-payment-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentAccount } from './entities/payment-account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentAccountService {
  constructor(
    @InjectRepository(PaymentAccount)
    private paymentAccountRepository: Repository<PaymentAccount>,

  ) {}
  
  async create(createPaymentAccountDto: CreatePaymentAccountDto) {
    return this.paymentAccountRepository.save(createPaymentAccountDto);
  }

  async findOne(id: number) {
    return this.paymentAccountRepository.findOneBy({ id });
  }

  async findByUser(userId: number) {
    return this.paymentAccountRepository.findBy({ userId });
  }

}
