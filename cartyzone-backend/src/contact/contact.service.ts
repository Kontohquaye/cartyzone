import { Injectable } from '@nestjs/common';
import { CartdbService } from 'src/cartdb/cartdb.service';

@Injectable()
export class ContactService {
  constructor(private readonly cartdbService: CartdbService) {}

  async createMessage() {
    return 'Message created successfully';
  }
}
