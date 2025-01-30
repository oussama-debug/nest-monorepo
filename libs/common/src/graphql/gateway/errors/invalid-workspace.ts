import { GraphQLError } from 'graphql';

export class InvalidWorkspaceGQLError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: { code: 'INVALID_WORKSPACE' },
    });
  }
}
