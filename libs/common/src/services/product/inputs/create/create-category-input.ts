import { IsBoolean, IsString } from 'class-validator';

export class CategoryCreateInput {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  is_published: boolean;

  @IsString()
  workspace_id: string;

  @IsString()
  user_id: string;
}
