import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthenticationGuard } from '../common/guards/graphql.guard';
import { ProductCreateGQLInput } from '@app/common/graphql/gateway/inputs/create/create-product-input';
import { UseUser } from '../common/decorators/use-user';
import { PricingCreateGQLInput } from '@app/common/graphql/gateway/inputs/create/create-pricing-input';
import { PricingFeeCreateGQLInput } from '@app/common/graphql/gateway/inputs/create/create-pricing-tax-input';
import { CategoryCreateGQLInput } from '@app/common/graphql/gateway/inputs/create/create-category-input';
import {
  PricingGQLEntityType,
  ProductGQLEntityType,
  PricingFeeGQLEntityType,
  CategoryGQLEntityType,
} from '@app/common/graphql/gateway/models/product.model';
import { CustomerService } from 'apps/gateway/src/customer/customer.service';
import { InvalidWorkspaceGQLError } from '@app/common/graphql/gateway/errors/invalid-workspace';
import { User, Workspace } from '@prisma/client';

@Resolver()
export class ProductResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly customerService: CustomerService,
  ) {}

  @Mutation(() => PricingGQLEntityType)
  @UseGuards(JwtAuthenticationGuard)
  async createPricing(
    @Args('input') input: PricingCreateGQLInput,
    @UseUser() user,
  ) {
    const workspace = await this.customerService.findWorkspacesByOwner(user.id);

    if (!workspace || workspace.length <= 0)
      throw new InvalidWorkspaceGQLError('Workspace not created yet');

    const r = await this.productService.createPricing({
      ...input,
      user_id: user.id,
      workspace_id: workspace[0].id,
    });
    return r;
  }

  @Mutation(() => PricingFeeGQLEntityType)
  @UseGuards(JwtAuthenticationGuard)
  async createFee(
    @Args('input') input: PricingFeeCreateGQLInput,
    @UseUser() user,
  ) {
    return await this.productService.createFee(input);
  }

  @Mutation(() => ProductGQLEntityType)
  @UseGuards(JwtAuthenticationGuard)
  async createProduct(
    @Args('input') input: ProductCreateGQLInput,
    @UseUser() user,
  ) {
    const workspace = await this.customerService.findWorkspacesByOwner(user.id);

    if (!workspace || workspace.length <= 0)
      throw new InvalidWorkspaceGQLError('Workspace not created yet');

    return await this.productService.createProduct({
      ...input,
      workspace_id: workspace[0].id,
      user_id: user.id,
    });
  }

  @Mutation(() => CategoryGQLEntityType)
  @UseGuards(JwtAuthenticationGuard)
  async createCategory(
    @Args('input') input: CategoryCreateGQLInput,
    @UseUser() user,
  ) {
    const workspace = await this.customerService.findWorkspacesByOwner(user.id);

    if (!workspace || workspace.length <= 0)
      throw new InvalidWorkspaceGQLError('Workspace not created yet');

    const category = await this.productService.createCategory({
      name: input.name,
      description: input.description,
      is_published: input.published,
      workspace_id: workspace[0].id,
      user_id: user.id,
    });

    const [users, workspaces] = await Promise.all([
      this.customerService.findCustomers([category.userId] as string[]),
      this.customerService.findWorkspaces([category.workspaceId] as string[]),
    ]);

    const { userId, workspaceId, ...categoryWithoutRefs } = category;

    return {
      ...categoryWithoutRefs,
      creator: users[0] || null,
      workspace: workspace[0] || null,
    };
  }

  @Query(() => [ProductGQLEntityType])
  @UseGuards(JwtAuthenticationGuard)
  async products(@UseUser() user) {
    const workspace = await this.customerService.findWorkspacesByOwner(user.id);

    if (!workspace || workspace.length <= 0) {
      throw new InvalidWorkspaceGQLError('Workspace not created yet');
    }

    const products = await this.productService.products({
      workspace_id: workspace[0].id,
    });

    if (products.length === 0) return [];

    const [userIds, workspaceIds] = products
      .reduce(
        (acc, product) => {
          acc[0].add(product.userId);
          acc[1].add(product.workspaceId);
          return acc;
        },
        [new Set<string>(), new Set<string>()],
      )
      .map((set) => Array.from(set));

    // get users and workspaces
    const [users, workspaces] = await Promise.all([
      this.customerService.findCustomers(userIds as string[]),
      this.customerService.findWorkspaces(workspaceIds as string[]),
    ]);

    // Create maps for efficient lookups
    const userMap: Map<string, User> = new Map(
      users.map((user) => [user.id, user]),
    );
    const workspaceMap: Map<string, Workspace> = new Map(
      workspaces.map((ws) => [ws.id, ws]),
    );

    // Map products with users and workspaces
    const productsWithUsersAndWorkspaces = products.map((product) => {
      const user = userMap.get(product.userId);
      const workspace = workspaceMap.get(product.workspaceId);

      const { userId, workspaceId, ...productsWithoutRefs } = product;

      return {
        ...productsWithoutRefs,
        creator: user || null,
        workspace: workspace || null,
      };
    });

    return productsWithUsersAndWorkspaces;
  }

  @Query(() => [CategoryGQLEntityType])
  @UseGuards(JwtAuthenticationGuard)
  async categories(@UseUser() user) {
    const workspace = await this.customerService.findWorkspacesByOwner(user.id);

    if (!workspace || workspace.length <= 0) {
      throw new InvalidWorkspaceGQLError('Workspace not created yet');
    }

    const categories = await this.productService.categories({
      workspace_id: workspace[0].id,
    });

    if (categories.length === 0) return [];

    // get userIds and workspaceIds
    const [userIds, workspaceIds] = categories
      .reduce(
        (acc, category) => {
          acc[0].add(category.userId);
          acc[1].add(category.workspaceId);
          return acc;
        },
        [new Set<string>(), new Set<string>()],
      )
      .map((set) => Array.from(set));

    // get users and workspaces
    const [users, workspaces] = await Promise.all([
      this.customerService.findCustomers(userIds as string[]),
      this.customerService.findWorkspaces(workspaceIds as string[]),
    ]);

    // Create maps for efficient lookups
    const userMap: Map<string, User> = new Map(
      users.map((user) => [user.id, user]),
    );
    const workspaceMap: Map<string, Workspace> = new Map(
      workspaces.map((ws) => [ws.id, ws]),
    );

    // Map categories with users and workspaces
    const categoriesWithUsersAndWorkspaces = categories.map((category) => {
      const user = userMap.get(category.userId);
      const workspace = workspaceMap.get(category.workspaceId);

      const { userId, workspaceId, ...categoryWithoutRefs } = category;

      return {
        ...categoryWithoutRefs,
        creator: user || null,
        workspace: workspace || null,
      };
    });

    return categoriesWithUsersAndWorkspaces;
  }
}
