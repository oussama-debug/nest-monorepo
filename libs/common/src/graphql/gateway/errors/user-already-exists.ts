import { GraphQLError } from 'graphql';

export class UserAlreadyExistsGQLError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: { code: 'USER_ALREADY_EXISTS' },
    });
  }
}
