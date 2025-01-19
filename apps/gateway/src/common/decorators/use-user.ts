import { UserGQLEntityType } from '@app/common/graphql/gateway/models/user.model';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const UseUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Promise<UserGQLEntityType> => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);
