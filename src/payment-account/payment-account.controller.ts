import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentAccountService } from './payment-account.service';
import { CreatePaymentAccountDto } from './dto/create-payment-account.dto';
import { UpdatePaymentAccountDto } from './dto/update-payment-account.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('payment-account')
@Controller('payment-account')
// @UseGuards(AuthGuard)
export class PaymentAccountController {
  constructor(private readonly paymentAccountService: PaymentAccountService) {}

  @Post()
  async create(@Body() createPaymentAccountDto: CreatePaymentAccountDto) {
    return this.paymentAccountService.create(createPaymentAccountDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.paymentAccountService.findOne(id);
  }

  @Get(':userId')
  async findByUser(@Param('userId') userId: number) {
    return this.paymentAccountService.findByUser(userId);
  }

}
