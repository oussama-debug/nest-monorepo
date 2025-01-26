import { GraphQLError } from 'graphql';

export class InvalidFileSizeGQLError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: { code: 'INVALID_FILE_SIZE' },
    });
  }
}
