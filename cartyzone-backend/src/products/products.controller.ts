import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';
import { createProductDto } from './dto/create-product.dto';
import { ProductQueryDto } from './dto/product-query.dto';
import type { PrismaPromise } from 'generated/prisma/internal/prismaNamespace';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(
    @Query(ValidationPipe) query: ProductQueryDto,
  ): PrismaPromise<Product[]> {
    return this.productsService.getAllProducts(query);
  }

  @Get('categories')
  getCategories() {
    return this.productsService.getCategories();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  @Post('create')
  createProduct(@Body(ValidationPipe) createProductDto: createProductDto) {
    // console.log('Received product data:', createProductDto);
    return this.productsService.create(createProductDto);
  }
}
