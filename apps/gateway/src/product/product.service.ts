import { CategoryCreateInput } from '@app/common/services/product/inputs/create/create-category-input';
import { PricingCreateInput } from '@app/common/services/product/inputs/create/create-pricing-input';
import { PricingTaxCreateInput } from '@app/common/services/product/inputs/create/create-pricing-tax-input';
import { ProductCreateInput } from '@app/common/services/product/inputs/create/create-product-input';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProductService {
  constructor(
    @Inject('product_service') private readonly productClient: ClientProxy,
  ) {}

  async createProduct(input: ProductCreateInput) {
    return this.productClient.emit('product:create', input);
  }

  async createPricing(input: PricingCreateInput) {
    return this.productClient.emit('product:pricing:create', input);
  }

  async createTax(input: PricingTaxCreateInput) {
    return this.productClient.emit('product:tax:create', input);
  }

  async createCategory(input: CategoryCreateInput) {
    return this.productClient.emit('product:category:create', input);
  }
}
