import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { Client, ClientsModule, Transport } from '@nestjs/microservices';

import { AuthenticationModule } from './authentication/authentication.module';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { StorageModule } from './storage/storage.module';
import { WebhookController } from './webhook.controller';
import { StripeService } from '@app/common/services/stripe';
import { PrismaService } from 'libs/database-gateway/src';
import { WebhookService } from './webhook.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          driver: ApolloDriver,
          definitions: {
            path: join(process.cwd(), 'apps/gateway/src/graphql.ts'),
            outputAs: 'class',
          },
          cors: {
            origin: 'http://localhost:3000',
            credentials: true,
          },
          autoSchemaFile: join(process.cwd(), 'apps/gateway/schema.gql'),
          installSubscriptionHandlers: true,
          playground: configService.getOrThrow('NODE_ENV') === 'development',
          debug: configService.getOrThrow('NODE_ENV') === 'development',
          context: ({ req }) => ({ req }),
          introspection: configService.getOrThrow('NODE_ENV') === 'development',
        };
      },
    }),
    ClientsModule.registerAsync({
      isGlobal: true,
      clients: [
        {
          inject: [ConfigService],
          name: 'product_service',
          useFactory: async (configService: ConfigService) => ({
            transport: Transport.REDIS,
            options: {
              host: configService.getOrThrow('GATEWAY_BUS_URL') as string,
              port: parseInt(
                configService.getOrThrow('GATEWAY_BUS_PORT') as string,
              ),
              ...(configService.getOrThrow('NODE_ENV') === 'production' && {
                password: configService.getOrThrow('GATEWAY_BUS_PASSWORD'),
              }),
            },
          }),
        },
      ],
    }),
    AuthenticationModule,
    CustomerModule,
    ProductModule,
    StorageModule,
  ],
  controllers: [WebhookController],
  providers: [StripeService, PrismaService, WebhookService],
})
export class GatewayModule {}
