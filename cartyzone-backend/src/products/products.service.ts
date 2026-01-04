import { Injectable, NotFoundException } from '@nestjs/common';
import {
  Category,
  Product,
  ProductResponse,
} from './interfaces/product.interface';
import { categories, products } from './data/data';
import { ProductQueryDto } from './dto/product-query.dto';
import { CartdbService } from 'src/cartdb/cartdb.service';
import { PrismaPromise } from 'generated/prisma/internal/prismaNamespace';

@Injectable()
export class ProductsService {
  constructor(private cartdbService: CartdbService) {}
  // private readonly products: Product[] = products;
  private readonly categories: Category[] = categories;

  getAllProducts(query: ProductQueryDto): PrismaPromise<Product[]> {
    const { category, minPrice, maxPrice } = query;
    return this.cartdbService.product.findMany({
      where: { category: category, price: { gte: minPrice, lte: maxPrice } },
    });
  }

  async getProductById(id: string) {
    const product = await this.cartdbService.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }
  // const filteredProducts = this.products.filter((product) => {
  //   if (category && product.category !== category) {
  //     return false;
  //   }
  //   if (minPrice !== undefined && product.price < minPrice) {
  //     return false;
  //   }
  //   if (maxPrice !== undefined && product.price > maxPrice) {
  //     return false;
  //   }
  //   return true;
  // });
  // return filteredProducts;
  // }

  getCategories() {
    return this.categories;
  }

  async create(product: Product): Promise<ProductResponse> {
    try {
      const newProduct = await this.cartdbService.product.create({
        data: product,
      });

      return {
        message: 'Product created successfully',
        error: false,
        data: newProduct,
      };
    } catch (error) {
      console.error(error);

      return {
        message: 'Failed to create product',
        error: true,
      };
    }

    // if(newProduct.) return { message: 'Product created successfully', error: false };
    // return { message: 'This action adds a new product', error: false };
  }
}
