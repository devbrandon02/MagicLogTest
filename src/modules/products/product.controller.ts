import { Body, Controller, Get, Param, Post, Query, Req, Search, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Controller('products')
export class ProductController {

  constructor(
    private readonly _productService: ProductService,
  ) { }
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createProduct(@Body() productData: CreateProductDto, @Req() req: Request & { user?: any }) {
    const userId = req.user?.userId;
    return this._productService.createProduct(productData, userId);
  }

  @Get('all')
  async getAllProducts(
    @Query('search') search?: string,
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string,
    @Query('sellerId') sellerId?: string,
  ) {
    if (sellerId) {
      return this._productService.findAllProducts({ sellerId });
    }

    return this._productService.findAllProducts({
      search,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProductByUserId(@Req() req: Request & { user?: any }) {
    const userId = req.user?.userId;
    return this._productService.findProductByuserId(userId);
  }

}