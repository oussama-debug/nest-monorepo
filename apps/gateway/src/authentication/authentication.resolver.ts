import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';
import { UserGQLEntityType } from './resolver/entities/user-entity';
import { CreateUserGQLInput } from './resolver/inputs/resolver-create-user-input';
import { AuthenticationResponseGQLEntityType } from './resolver/entities/authentication-entity';
import { AuthenticationGQLInput } from './resolver/inputs/resolver-login-user-input';

@Resolver()
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Query(() => String)
  async hello() {
    return 'Hello, world!';
  }

  @Mutation(() => UserGQLEntityType)
  async createUser(@Args('input') input: CreateUserGQLInput) {
    return input;
  }

  @Mutation(() => AuthenticationResponseGQLEntityType)
  async loginUser(@Args('input') input: AuthenticationGQLInput) {
    const user = await this.authenticationService.validateUser(
      input.username,
      input.password,
    );

    if (!user) {
      throw new Error('Invalid credentials');
    }

    return this.authenticationService.login(user);
  }
}
