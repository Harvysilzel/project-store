import { IsArray, IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { DeepPartial } from 'typeorm';

export class CreateProductDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsOptional()
  stock: number;

  @IsBoolean()
  @IsOptional()
  descuento: DeepPartial<boolean>;

  @IsNumber()
  @IsOptional()
  desc: number;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsString()
  @IsOptional()
  filename: string;

  @IsDateString()
  @IsOptional()
  created_at: string;

  @IsNumber()
  @IsNotEmpty()
  categoria_id: number;

  @IsArray({ each: true })
  @IsString()
  @IsOptional()
  images?: string[];

}
