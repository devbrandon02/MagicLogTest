import { Role } from '@prisma/client';
import { IsEmail, IsString, MinLength, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(Role, { message: 'Invalid role. Allowed values: BUYER, SELLER' })
  role?: Role; 
}
