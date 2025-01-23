import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWorkspaceGQLInput {
  @Field()
  name: string;

  @Field()
  description: string;
}
