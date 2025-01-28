import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule, { rawBody: true });
  app.setGlobalPrefix('v1');
  await app.listen(process.env.port ?? 4000);
}
bootstrap();
