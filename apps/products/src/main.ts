import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ProductsModule } from './products.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('ProductsService');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductsModule,
    {
      transport: Transport.REDIS,
      options: {
        host: process.env.BUS_HOST,
        port: parseInt(process.env.BUS_PORT || '6379'),
        retryAttempts: 5,
        retryDelay: 1000,
      },
    },
  );
  await app.listen();
}
bootstrap();
