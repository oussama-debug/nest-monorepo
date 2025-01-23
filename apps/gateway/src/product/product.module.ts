import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { PrismaService } from 'libs/database-products/src';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [ProductService, PrismaService, JwtService],
})
export class ProductModule {}
