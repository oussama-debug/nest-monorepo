import { NestFactory } from '@nestjs/core';
import { Transport, type MicroserviceOptions } from '@nestjs/microservices';
import { ProductsModule } from './products.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductsModule,
    {
      transport: Transport.REDIS,
      options: {
        host: process.env.GATEWAY_BUS_URL as string,
        port: parseInt(process.env.GATEWAY_BUS_PORT as string),
      },
    },
  );
  await app.listen();
}
bootstrap();
