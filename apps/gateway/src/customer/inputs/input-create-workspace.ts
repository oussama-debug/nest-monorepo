import { allowedCountries } from '@app/common/constants/countries';
import { IsArray, IsEnum, IsString } from 'class-validator';

export class CreateWorkspaceInput {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  ownerId: string;

  @IsString()
  ownerUsername: string;

  @IsString()
  @IsEnum(allowedCountries)
  country: string;

  @IsArray()
  services: string[];
}
