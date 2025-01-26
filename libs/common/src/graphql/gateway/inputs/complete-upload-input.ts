import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CompleteUploadPartsGQLInput {
  @Field(() => Int)
  partNumber: number;
  @Field()
  etag: string;
}

@InputType()
export class CompleteUploadGQLInput {
  @Field()
  key: string;
  @Field()
  uploadId: string;
  @Field(() => [CompleteUploadPartsGQLInput])
  parts: Array<CompleteUploadPartsGQLInput>;
}
