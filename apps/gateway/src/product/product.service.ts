import { CategoryCreateInput } from '@app/common/services/product/inputs/create/create-category-input';
import { PricingCreateInput } from '@app/common/services/product/inputs/create/create-pricing-input';
import { PricingFeeCreateInput } from '@app/common/services/product/inputs/create/create-pricing-tax-input';
import { ProductCreateInput } from '@app/common/services/product/inputs/create/create-product-input';
import { CategoriesInput } from '@app/common/services/product/inputs/get/get-categories-input';
import { ProductsInput } from '@app/common/services/product/inputs/get/get-products-input';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, timeout } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(
    @Inject('product_service') private readonly productClient: ClientProxy,
  ) {}

  async createProduct(input: ProductCreateInput) {
    return await lastValueFrom(
      this.productClient.send('product_create', input).pipe(timeout(5000)),
    );
  }

  async createPricing(input: PricingCreateInput) {
    return await lastValueFrom(
      this.productClient
        .send('product_pricing_create', input)
        .pipe(timeout(5000)),
    );
  }

  async createFee(input: PricingFeeCreateInput) {
    return this.productClient.emit('product_fee_create', input);
  }

  async createCategory(input: CategoryCreateInput) {
    return lastValueFrom(
      this.productClient
        .send('product_category_create', input)
        .pipe(timeout(5000)),
    );
  }

  async categories(input: CategoriesInput) {
    return await lastValueFrom(
      this.productClient.send('product_categories', input).pipe(timeout(5000)),
    );
  }

  async products(input: ProductsInput) {
    return await lastValueFrom(
      this.productClient.send('product_products', input).pipe(timeout(5000)),
    );
  }
}
