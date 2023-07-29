import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Product } from './entities/product.entity';



@Module({

    imports: [TypeOrmModule.forFeature([Product])],

    providers: [
        //aqui van los servicios
    ],

    controllers:[
        //aqui van los controllers
    ],

})
export class ProductModule {}