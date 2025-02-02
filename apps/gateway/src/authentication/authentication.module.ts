import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { PrismaService } from 'libs/database-gateway/src';
import { AuthenticationResolver } from './authentication.resolver';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from '../common/strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.getOrThrow('SECRET_JWT_KEY'),
          secretOrPrivateKey: configService.getOrThrow('SECRET_JWT_KEY'),
          signOptions: { expiresIn: '30d' },
        };
      },
    }),
  ],
  providers: [
    AuthenticationService,
    JwtStrategy,
    PrismaService,
    AuthenticationResolver,
  ],
})
export class AuthenticationModule {}
