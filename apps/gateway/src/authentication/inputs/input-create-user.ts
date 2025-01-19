import { allowedCountries } from '@app/common/constants/countries';
import { Field } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsString } from 'class-validator';

export class CreateUserInput {
  @IsString()
  @IsEmail()
  username: string;

  @IsString()
  @IsEmail()
  password: string;

  @IsString()
  @IsEnum(allowedCountries)
  country: string;
}
