import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { CartdbModule } from 'src/cartdb/cartdb.module';

@Module({
  imports: [CartdbModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
