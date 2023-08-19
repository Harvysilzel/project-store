import { Module } from '@nestjs/common';
import { ModelsService } from './services/models.service';
import { ModelsController } from './controllers/models.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Model } from './entities/model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Model])],
  controllers: [ModelsController],
  providers: [ModelsService]
})
export class ModelsModule {}
