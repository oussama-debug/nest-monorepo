import { Module } from '@nestjs/common';
import { CommonService } from './services/common.service';

@Module({
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
