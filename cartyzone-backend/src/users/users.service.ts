import { Injectable } from '@nestjs/common';
import { CartdbService } from 'src/cartdb/cartdb.service';

@Injectable()
export class UsersService {
  constructor(private cartdbService: CartdbService) {}
  getAllUsers() {
    return this.cartdbService.user.findMany();
  }
}
