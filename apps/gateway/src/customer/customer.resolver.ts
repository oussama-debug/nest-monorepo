import { Query, Resolver } from '@nestjs/graphql';
import { UseUser } from '../common/decorators/use-user';
import { UseGuards } from '@nestjs/common';
import { JwtAuthenticationGuard } from '../common/guards/graphql.guard';
import { UserGQLEntityType } from '@app/common/graphql/gateway/models/user.model';

@Resolver()
export class CustomerResolver {
  constructor() {}

  @Query(() => UserGQLEntityType)
  @UseGuards(JwtAuthenticationGuard)
  async me(@UseUser() user) {
    return user;
  }
}
