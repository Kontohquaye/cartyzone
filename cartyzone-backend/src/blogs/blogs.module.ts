import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { CartdbModule } from 'src/cartdb/cartdb.module';

@Module({
  imports: [CartdbModule],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
