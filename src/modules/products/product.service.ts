import { PrismaService } from "src/database/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "@prisma/client";
import { In } from "typeorm";
import { Injectable } from "@nestjs/common";


@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) { }

  async createProduct(createProductDto: CreateProductDto, userId: string): Promise<any> {
    const existingProduct = await this.prisma.product.findUnique({
      where: { sku: createProductDto.sku },
    });

    if (existingProduct) {
      return {
        message: "Product already exists",
        ok: false,
        statusCode: 409,
      }
    }

    if (createProductDto.price < 0) {
      return {
        message: "Price cannot be negative",
        ok: false,
        statusCode: 400,
      }
    }

    if (createProductDto.quantity < 0) {
      return {
        message: "Quantity cannot be negative",
        ok: false,
        statusCode: 400,
      }
    }

    try {

      return await this.prisma.product.create({
        data: {
          name: createProductDto.name,
          price: Number(createProductDto.price),
          sku: createProductDto.sku,
          quantity: createProductDto.quantity,
          sellerId: userId
        }
      });
    } catch (error) {
      throw new Error("An unexpected error occurred while creating the product. Please try again later." + error);
    }

  }

async findAllProducts(filters: {
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  sellerId?: string;
}): Promise<Product[]> {
  if (filters.sellerId) {
    return this.prisma.product.findMany({
      where: { sellerId: filters.sellerId },
    });
  }

  const where: any = {};

  if (filters.search) {
    where.OR = [
      { name: { contains: filters.search, mode: 'insensitive' } },
      { sku: { contains: filters.search, mode: 'insensitive' } },
    ];
  }

  if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
    where.price = {};
    if (filters.minPrice !== undefined) where.price.gte = filters.minPrice;
    if (filters.maxPrice !== undefined) where.price.lte = filters.maxPrice;
  }

  return this.prisma.product.findMany({ where });
}

  async findProductByuserId(id: string): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        sellerId: id,
      },
    });
  }

}
