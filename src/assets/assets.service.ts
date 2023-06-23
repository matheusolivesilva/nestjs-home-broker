import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { AssetDto } from './assets.dto';

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}

  create(data: AssetDto) {
    return this.prismaService.asset.create({ data });
  }

  all() {
    return this.prismaService.asset.findMany();
  }
}
