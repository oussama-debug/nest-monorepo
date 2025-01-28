import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { EventPattern } from '@nestjs/microservices';
import { ProductCreateInput } from '@app/common/services/product/inputs/create/create-product-input';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @EventPattern('product:create')
  async createProduct(payload: ProductCreateInput) {}
}
