import { IsString } from 'class-validator';

export class CategoriesInput {
  @IsString()
  workspace_id: string;
}
