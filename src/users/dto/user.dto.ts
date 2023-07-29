import { IsNotEmpty } from 'class-validator';
import { IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator/types/decorator/decorators";


export class CreateUserDto{
//declarando y creando dto de users
    @IsNotEmpty()
    @IsNumber()
    id: Number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @MinLength(8)
    name: string; 

    @IsNotEmpty()
    @IsString()
    @MaxLength(70)
    @MinLength(8)
    password: string; 

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @MinLength(8)
    email: string; 

    @IsNotEmpty()
    @IsString()
    @MaxLength(12)
    sexo: string; 

    @IsOptional()
    active: boolean;


}