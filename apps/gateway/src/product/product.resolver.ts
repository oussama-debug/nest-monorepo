import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthenticationGuard } from '../common/guards/graphql.guard';
import { ProductCreateGQLInput } from '@app/common/graphql/gateway/inputs/create/create-product-input';
import { UseUser } from '../common/decorators/use-user';
import { PricingCreateGQLInput } from '@app/common/graphql/gateway/inputs/create/create-pricing-input';
import { PricingTaxCreateGQLInput } from '@app/common/graphql/gateway/inputs/create/create-pricing-tax-input';
import { CategoryCreateGQLInput } from '@app/common/graphql/gateway/inputs/create/create-category-input';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthenticationGuard)
  async createPricing(
    @Args('input') input: PricingCreateGQLInput,
    @UseUser() user,
  ) {
    return await this.productService.createPricing(input);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthenticationGuard)
  async createTax(
    @Args('input') input: PricingTaxCreateGQLInput,
    @UseUser() user,
  ) {
    return await this.productService.createTax(input);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthenticationGuard)
  async createProduct(
    @Args('input') input: ProductCreateGQLInput,
    @UseUser() user,
  ) {
    return await this.productService.createProduct(input);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthenticationGuard)
  async createCategory(
    @Args('input') input: CategoryCreateGQLInput,
    @UseUser() user,
  ) {
    return await this.productService.createCategory(input);
  }
}
