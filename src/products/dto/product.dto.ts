import { IsNotEmpty } from "class-validator";
import { IsNumber, IsString, MaxLength } from "class-validator/types/decorator/decorators";

export class CreateProductDto{
//los decoradores validan que la informacion ingresada sea correcta
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    name: string; 

    @IsNotEmpty()
    @IsString()
    @MaxLength(300)
    Description: string; 

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    stock: number;


}