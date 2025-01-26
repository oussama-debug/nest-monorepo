import { Module } from '@nestjs/common';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';
import { PrismaService } from 'libs/database-gateway/src';
import { StripeService } from '@app/common/services/stripe';
import { AuthenticationService } from 'apps/gateway/src/authentication/authentication.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  providers: [
    CustomerResolver,
    CustomerService,
    PrismaService,
    StripeService,
    AuthenticationService,
    JwtService,
  ],
})
export class CustomerModule {}
