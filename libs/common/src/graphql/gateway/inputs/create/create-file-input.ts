import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateFileGQLInput {
  @Field()
  fileName: string;
  @Field()
  fileType: string;
  @Field(() => Int)
  totalParts: number;
  @Field(() => Int)
  fileSize: number;
}
