import { Module } from '@nestjs/common';
import { StorageModule as S3Storage } from '@app/storage';
import { ConfigService } from '@nestjs/config';
import { StorageResolver } from './storage.resolver';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    S3Storage.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          s3: {
            endpoint: configService.getOrThrow('SECRET_AWS_ENDPOINT_URL_S3'),
            secretAccessKey: configService.getOrThrow(
              'SECRET_AWS_SECRET_ACCESS_KEY',
            ),
            accessKeyId: configService.getOrThrow('SECRET_AWS_ACCESS_KEY_ID'),
            region: configService.getOrThrow('SECRET_AWS_REGION'),
            bucketName: configService.getOrThrow('SECRET_AWS_BUCKET_NAME'),
          },
        };
      },
    }),
  ],
  providers: [StorageResolver, JwtService],
})
export class StorageModule {}
