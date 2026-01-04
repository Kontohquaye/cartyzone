import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CartdbModule } from 'src/cartdb/cartdb.module';

@Module({
  imports: [CartdbModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
