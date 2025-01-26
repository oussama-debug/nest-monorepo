import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StoragePresignedURLGQLEntityType {
  @Field(() => Int)
  partNumber: number;
  @Field(() => String)
  presignedUrl: string;
}

@ObjectType()
export class StorageInitializationResponseGQLEntityType {
  @Field()
  uploadId: string;
  @Field()
  key: string;
  @Field(() => [StoragePresignedURLGQLEntityType])
  presignedUrls: StoragePresignedURLGQLEntityType[];
}

@ObjectType()
export class StorageCompleteResponseGQLEntityType {
  @Field()
  location: string;
  @Field()
  key: string;
  @Field()
  bucket: string;
}
