import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { OrderDto } from './order.dto';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  all() {
    return this.prismaService.order.findMany();
  }

  create(input: OrderDto) {
    return this.prismaService.order.create({
      data: {
        ...input,
        status: OrderStatus.PENDING,
      },
    });
  }
}
