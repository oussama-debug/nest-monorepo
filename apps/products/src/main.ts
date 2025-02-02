import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ProductsModule } from './products.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('ProductsService');

  const app = await NestFactory.createMicroservice(ProductsModule, {
    transport: Transport.REDIS,
    options: {
      url: process.env.GATEWAY_BUS_URL as string,
      retryAttempts: 5,
      retryDelay: 1000,
      maxRetryTime: 30000, // Increased to 30 seconds
      retryStrategy: (times: number) => {
        const delay = Math.min(times * 1000, 5000);
        logger.log(`Attempting to reconnect... (attempt ${times})`);
        return delay;
      },
      onError: (err: Error) => {
        logger.error(`Redis Connection Error: ${err.message}`);
      },
      disconnectTimeout: 5000,
      connectTimeout: 10000,
    },
  });
  await app.listen();
}
bootstrap();
