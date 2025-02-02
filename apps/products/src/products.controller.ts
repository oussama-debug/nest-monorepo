import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductCreateInput } from '@app/common/services/product/inputs/create/create-product-input';
import { CategoryCreateInput } from '@app/common/services/product/inputs/create/create-category-input';
import { CategoriesInput } from '@app/common/services/product/inputs/get/get-categories-input';
import { PricingCreateInput } from '@app/common/services/product/inputs/create/create-pricing-input';
import { ProductsInput } from '@app/common/services/product/inputs/get/get-products-input';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern('product_create')
  async createProduct(@Payload() payload: ProductCreateInput) {
    return await this.productsService.createProduct(payload);
  }

  @MessagePattern('product_pricing_create')
  async createPricing(@Payload() payload: PricingCreateInput) {
    return await this.productsService.createPricing(payload);
  }

  @MessagePattern('product_category_create')
  async createCategory(@Payload() payload: CategoryCreateInput) {
    return await this.productsService.createCategory(payload);
  }

  @MessagePattern('product_categories')
  async categories(@Payload() payload: CategoriesInput) {
    return await this.productsService.categories(payload);
  }

  @MessagePattern('product_products')
  async products(@Payload() payload: ProductsInput) {
    return await this.productsService.products(payload);
  }
}
