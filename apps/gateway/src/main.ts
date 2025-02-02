import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule, { rawBody: true });
  app.setGlobalPrefix('v1');
  app.enableCors();
  app.enableShutdownHooks();
  await app.listen(4000);
}
bootstrap();
