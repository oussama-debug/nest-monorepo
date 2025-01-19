import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthenticationService } from './authentication.service';
import { PrismaService } from 'libs/database-gateway/src';
import { AuthenticationResolver } from './authentication.resolver';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from '../common/strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.getOrThrow('SECRET_JWT_KEY'),
          signOptions: { expiresIn: '60m' },
        };
      },
    }),
  ],
  providers: [
    AuthenticationService,
    PrismaService,
    JwtStrategy,
    AuthenticationResolver,
  ],
})
export class AuthenticationModule {}
