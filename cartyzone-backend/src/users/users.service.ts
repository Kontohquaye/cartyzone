import { Injectable } from '@nestjs/common';
import { CartdbService } from 'src/cartdb/cartdb.service';

export type User = any;

@Injectable()
export class UsersService {
  constructor(private cartdbService: CartdbService) {}
  private readonly users = [
    {
      id: 1,
      email: 'john@gmail.com',
      password: 'changeme',
    },
    {
      id: 2,
      email: 'maria@gmail.com',
      password: 'guess',
    },
  ];
  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
  // findOneUser() {
  //   return this.cartdbService.user.findMany();
  // }
}
