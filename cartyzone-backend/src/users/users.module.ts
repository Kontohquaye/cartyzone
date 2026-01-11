import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { CartdbModule } from 'src/cartdb/cartdb.module';

@Module({
  imports: [CartdbModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
