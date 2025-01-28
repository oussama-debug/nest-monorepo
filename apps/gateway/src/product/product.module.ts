import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { PrismaService } from 'libs/database-products/src';
import { JwtService } from '@nestjs/jwt';
import { ProductResolver } from './product.resolver';

@Module({
  providers: [ProductService, PrismaService, ProductResolver, JwtService],
})
export class ProductModule {}
