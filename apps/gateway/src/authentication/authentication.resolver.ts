import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';
import { CreateUserGQLInput } from '../../../../libs/common/src/graphql/gateway/inputs/create-user-input';
import { AuthenticationResponseGQLEntityType } from '@app/common/graphql/gateway/models/authentication.model';
import { AuthenticationGQLInput } from '@app/common/graphql/gateway/inputs/login-user-input';
import { InvalidCredentialsGQLError } from '@app/common/graphql/gateway/errors/invalid-credentials';

@Resolver()
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Mutation(() => AuthenticationResponseGQLEntityType)
  async createUser(@Args('input') input: CreateUserGQLInput) {
    const user = await this.authenticationService.createUser(input);
    return await this.authenticationService.login(user);
  }

  @Mutation(() => AuthenticationResponseGQLEntityType)
  async loginUser(@Args('input') input: AuthenticationGQLInput) {
    const user = await this.authenticationService.validateUser(
      input.username,
      input.password,
    );

    if (!user) {
      throw new InvalidCredentialsGQLError(
        'Credentials used to login are invalid',
      );
    }

    return this.authenticationService.login(user);
  }
}
