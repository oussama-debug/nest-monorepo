import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AbortUploadGQLInput {
  @Field()
  key: string;
  @Field()
  uploadId: string;
}
