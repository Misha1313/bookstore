import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,

  ) {}

  async create(createSaleDto: CreateSaleDto) {
    return this.saleRepository.save(createSaleDto);
  }

  async findAll() {
    return this.saleRepository
      .createQueryBuilder('s')
      .leftJoinAndSelect('s.saleItems', 'si')
      .cache('sale', 60 * 1000)
      .getMany();
  }

  async findOne(id: number) {
    return this.saleRepository
      .createQueryBuilder('s')
      .leftJoinAndSelect('s.saleItems', 'si')
      .where('s.id = :id', { id })
      .getOne();
  }

}
