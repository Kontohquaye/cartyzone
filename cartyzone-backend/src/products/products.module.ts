import { Module } from '@nestjs/common';
import { CartdbService } from 'src/cartdb/cartdb.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CartdbModule } from 'src/cartdb/cartdb.module';

@Module({
  imports: [CartdbModule],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
