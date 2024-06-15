import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from "../dto/product.dto";
import { Request, Response } from "express";

@Controller('products')
export class ProductController
{
    constructor(private readonly productsService:ProductsService){}
    @Post()
    async CreateProduct(@Body() createProductDto: CreateProductDto){
        return this.productsService.create(createProductDto);
    }

    @Get()
    findAll(){
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.productsService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.productsService.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createProductDto :CreateProductDto,
        
    )
    {
        return this.productsService.update(id, createProductDto)
        
    }




    @Get('VirtualStore/:proveedor_id')
    findProveedor(@Param('proveedor_id', ParseIntPipe) proveedor_id: number){
        return this.productsService.findProveedor(proveedor_id); //aqui estoy llamando a todos los productos de el id proveedor
    }


    @Get('categories/:categoria_id')
    findCategories(@Param('categoria_id', ParseIntPipe) categoria_id: number) {
      return this.productsService.findCategorie(categoria_id); // Llama a la función corregida en el servicio
    
        
    }

    @Get('descuentos/:descuento')
    findDescuentos(@Param('descuento') descuento: boolean){
        return this.productsService.findDescuento(descuento);
    }



    @Get('random/:count')
  getRandomProducts(@Param('count') count: number) {
    return this.productsService.getRandomProducts(count);
  }
      
    

   

}