import { Injectable } from '@nestjs/common';
import { CreateModelDto } from '../dto/create-model.dto';
import { UpdateModelDto } from '../dto/update-model.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from '../entities/model.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class ModelsService {
    constructor(
      @InjectRepository(Model)
      private readonly ModelRepo: Repository<Product>
    ){}

  async create(createModelDto: CreateModelDto) {
    const model = this.ModelRepo.create(createModelDto);
    await this.ModelRepo.save(model);
    return model
  }

  findAll() {
    return `This action returns all models`;
  }

  findOne(id: number) {
    return `This action returns a #${id} model`;
  }

  update(id: number, updateModelDto: UpdateModelDto) {
    return `This action updates a #${id} model`;
  }

  remove(id: number) {
    return `This action removes a #${id} model`;
  }
}
