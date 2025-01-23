import { Controller, Get } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @MessagePattern('workspace:create')
  async createWorkspaceStore() {}
}
