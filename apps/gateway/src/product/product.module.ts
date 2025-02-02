import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { PrismaService } from '@app/database-products/index';
import { JwtService } from '@nestjs/jwt';
import { ProductResolver } from './product.resolver';
import { CustomerModule } from 'apps/gateway/src/customer/customer.module';

@Module({
  imports: [CustomerModule],
  providers: [ProductService, PrismaService, ProductResolver, JwtService],
})
export class ProductModule {}
