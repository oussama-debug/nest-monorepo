import { Module } from '@nestjs/common';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';
import { PrismaService } from 'libs/database-gateway/src';
import { StripeService } from '@app/common/services/stripe';

@Module({
  imports: [],
  providers: [CustomerResolver, CustomerService, PrismaService, StripeService],
})
export class CustomerModule {}
