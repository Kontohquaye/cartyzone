import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';
import { createProductDto } from './dto/create-product.dto';
import { ProductQueryDto } from './dto/product-query.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getAllProducts(@Query(ValidationPipe) query: ProductQueryDto): Product[] {
    return this.productService.getAllProducts(query);
  }

  @Post('create')
  createProduct(@Body(ValidationPipe) createProductDto: createProductDto) {
    return this.productService.create(createProductDto);
  }
}
