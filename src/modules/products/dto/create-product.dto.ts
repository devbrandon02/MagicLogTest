import { Role } from '@prisma/client';
import { IsEmail, IsString, MinLength, IsEnum, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  @MinLength(3)
  sku: string;

  @IsNumber()
  quantity: number;
}
