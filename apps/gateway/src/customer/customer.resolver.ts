import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseUser } from '../common/decorators/use-user';
import { UseGuards } from '@nestjs/common';
import { JwtAuthenticationGuard } from '../common/guards/graphql.guard';
import { UserGQLEntityType } from '@app/common/graphql/gateway/models/user.model';
import { WorkspaceGQLEntityType } from '@app/common/graphql/gateway/models/workspace.model';
import { CreateWorkspaceGQLInput } from '@app/common/graphql/gateway/inputs/create-workspace-input';
import { CustomerService } from './customer.service';
import { AuthenticationService } from 'apps/gateway/src/authentication/authentication.service';

@Resolver()
export class CustomerResolver {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly customerService: CustomerService,
  ) {}

  @Query(() => UserGQLEntityType)
  @UseGuards(JwtAuthenticationGuard)
  async me(@UseUser() user) {
    const me = await this.authenticationService.findUserById(user.id);

    return me;
  }

  @Query(() => [WorkspaceGQLEntityType])
  @UseGuards(JwtAuthenticationGuard)
  async findWorkspaces(@UseUser() user) {
    return await this.customerService.findWorkspacesByOwner(user.id);
  }

  @Mutation(() => WorkspaceGQLEntityType)
  @UseGuards(JwtAuthenticationGuard)
  async createWorkspace(
    @Args('input') input: CreateWorkspaceGQLInput,
    @UseUser() user,
  ) {
    return await this.customerService.createWorkspace({
      name: input.name,
      description: input.description,
      ownerId: user.id,
      ownerUsername: user.username,
    });
  }
}
