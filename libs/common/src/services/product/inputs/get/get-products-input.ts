import { IsString } from 'class-validator';

export class ProductsInput {
  @IsString()
  workspace_id: string;
}
