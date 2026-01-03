import { Injectable } from '@nestjs/common';
import { Product, ProductResponse } from './interfaces/product.interface';
import { products } from './data/data';
import { min } from 'class-validator';
import { ProductQueryDto } from './dto/product-query.dto';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = products;

  getAllProducts(query: ProductQueryDto): Product[] {
    const { category, minPrice, maxPrice } = query;
    const filteredProducts = this.products.filter((product) => {
      if (category && product.category !== category) {
        return false;
      }
      if (minPrice !== undefined && product.price < minPrice) {
        return false;
      }
      if (maxPrice !== undefined && product.price > maxPrice) {
        return false;
      }
      return true;
    });
    return filteredProducts;
  }

  create(product: Product): ProductResponse {
    this.products.push(product);
    console.log(product);
    return { message: 'This action adds a new product', error: false };
  }
}
