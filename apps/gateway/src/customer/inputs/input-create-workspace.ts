import { IsString } from 'class-validator';

export class CreateWorkspaceInput {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  ownerId: string;

  @IsString()
  ownerUsername: string;
}
