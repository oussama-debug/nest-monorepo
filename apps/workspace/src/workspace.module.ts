import { Module } from '@nestjs/common';
import { WorkspaceController } from './workspace.controller';
import { WorkspaceService } from './workspace.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'libs/database-gateway/src';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [WorkspaceController],
  providers: [WorkspaceService, PrismaService],
})
export class WorkspaceModule {}
