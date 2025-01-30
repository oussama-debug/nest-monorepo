import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { ProductCreateInput } from '@app/common/services/product/inputs/create/create-product-input';
import { CategoryCreateInput } from '@app/common/services/product/inputs/create/create-category-input';
import { CategoriesInput } from '@app/common/services/product/inputs/get/get-categories-input';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern('product_create')
  async createProduct(@Payload() payload: ProductCreateInput) {}

  @MessagePattern('product_category_create')
  async createCategory(@Payload() payload: CategoryCreateInput) {
    return await this.productsService.createCategory(payload);
  }

  @MessagePattern('product_categories')
  async categories(@Payload() payload: CategoriesInput) {
    return await this.productsService.categories(payload);
  }
}
