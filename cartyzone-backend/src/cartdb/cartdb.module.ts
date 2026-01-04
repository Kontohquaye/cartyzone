import { Module } from '@nestjs/common';
import { CartdbService } from './cartdb.service';

@Module({
  exports: [CartdbService],
  providers: [CartdbService],
})
export class CartdbModule {}
