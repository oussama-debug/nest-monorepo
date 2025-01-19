import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { CustomerModule } from './customer/customer.module';

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
          autoSchemaFile: join(process.cwd(), 'apps/gateway/schema.gql'),
          installSubscriptionHandlers: true,
          playground: configService.getOrThrow('NODE_ENV') === 'development',
          debug: configService.getOrThrow('NODE_ENV') === 'development',
          cors: true,
          context: ({ req }) => ({ req }),
          introspection: configService.getOrThrow('NODE_ENV') === 'development',
        };
      },
    }),
    AuthenticationModule,
    CustomerModule,
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
