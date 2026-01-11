import { Controller, Get, Post } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get()
  getAllOrders() {
    return 'All orders retrieved successfully';
  }
  @Post('place')
  placeOrder() {
    return 'Order placed successfully';
  }

  @Get(':id')
  getOrderById() {
    return 'Order history retrieved successfully';
  }
}
