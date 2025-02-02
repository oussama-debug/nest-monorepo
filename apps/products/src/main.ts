import { NestFactory } from '@nestjs/core';
import { Transport, type MicroserviceOptions } from '@nestjs/microservices';
import { ProductsModule } from './products.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ProductsModule, {
    transport: Transport.REDIS,
    options: {
      url: process.env.GATEWAY_BUS_URL as string,
      retryAttempts: 5,
      retryDelay: 1000,
    },
  });
  await app.listen();
}
bootstrap();
