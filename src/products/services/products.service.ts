import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateProductDto } from '../dto/product.dto';
import { ProductImage } from '../entities/product-image.entity';
@Injectable()
export class ProductsService{
    constructor(
        @InjectRepository(Product)
        private productRepo: Repository<Product>,

        @InjectRepository(ProductImage)
        private readonly productImageRepo: Repository<ProductImage>,

        private readonly dataSource:DataSource,
    ){}

    // async create(createProductDto:CreateProductDto){
    //     const product = this.productRepo.create(createProductDto);
    //     await  this.productRepo.save(product);
    //     return product;
    // }

    //Crear un producto y agregar imagenes
    async create(productDto: CreateProductDto){
        const { images = [], ...detailsProductds } = productDto;

        const product = await this.productRepo.create({
            ...detailsProductds,
            images: images.map((image) => this.productImageRepo.create({ url: image }),
            ),
        });
        await this.productRepo.save(product);
        return product;
    }

    
    //Encontrar un registro con relaciones
    findOne(id: number){
        return this.productRepo.findOne({
            where: {id},
            relations: {
                autor: true,
                categoria: true,
                proveedor: true
            }
        });
        
    }

    //mostrar todos los registros
    findAll(){
        return   this.productRepo.find({
            order: {id: 'ASC'},
            relations: {
                images: true,
                autor: true,
                categoria: true,
                proveedor: true
            },
        });
    }
    //eliminar un registro
    async remove(id:number){
        const product =await this.findOne(id);
        await this.productRepo.remove(product);
        return 'Producto eliminado';
    }

    //actualizar un registro
    async update(id: number, cambios: CreateProductDto){
       const {images, ...updateAll } = cambios;
       const product = await this.productRepo.preload({
        id: id,
        ...updateAll,
       });

       //EMPESAMOS A CORRER EL QUERRYRUNNER, ESTO SERIA EL PUNTO DE PARTIDA DE LA TRANSACION
       const queryRunner = this.dataSource.createQueryRunner();
       await queryRunner.connect();
       await queryRunner.startTransaction();

       if (images) {
        //si images no esta vacio, vamos a borrar las imagenes exixtentes
        await queryRunner.manager.delete(ProductImage, { product: { id}});

        //aqui creamos nuevas imagenes del producto
        product.images = images.map((images)=>
        this.productImageRepo.create({ url: images}),
        );
       } else {
        product.images = await this.productImageRepo.findBy({product: {id}});
       }

       //guardamos el producto
       await queryRunner.manager.save(product);

       //finalizamos la transaccion y liberamos el queryRunner
       await queryRunner.commitTransaction();
       await queryRunner.release();
       return product;
       }
    
   
}