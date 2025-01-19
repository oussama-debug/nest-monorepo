import { GraphQLError } from 'graphql';

export class InvalidCredentialsGQLError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: { code: 'INVALID_USER_CREDENTIALS' },
    });
  }
}
