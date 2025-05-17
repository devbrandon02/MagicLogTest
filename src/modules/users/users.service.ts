import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';
import { Role, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findByRole(role: Role) {
    return this.prisma.user.findMany({ where: { role } });
  }

  async create(createUserDto: CreateUserDto) {
    const EXISTING_USER = await this.findByEmail(createUserDto.email);
    if (EXISTING_USER) {
      return {
        message: 'User already exists',
        ok: false,
        statusCode: 409,
      }
    }

    try {      
      const HASHED_PASSWORD = await bcrypt.hash(createUserDto.password, 5);
      await this.prisma.user.create({ data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: HASHED_PASSWORD,
        role: createUserDto.role || Role.SELLER,
      } });

      return {
        message: 'User created successfully',
        ok: true,
      };
    } catch (error) {
      throw new Error('An unexpected error occurred while creating the user. Please try again later.' + error);
    }
  }
}
