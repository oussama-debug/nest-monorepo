import { CategoryCreateInput } from '@app/common/services/product/inputs/create/create-category-input';
import { PricingCreateInput } from '@app/common/services/product/inputs/create/create-pricing-input';
import { ProductCreateInput } from '@app/common/services/product/inputs/create/create-product-input';
import { CategoriesInput } from '@app/common/services/product/inputs/get/get-categories-input';
import { PrismaService } from '@app/database-products';
import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { v4 } from 'uuid';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: PrismaService) {}

  async createProduct(input: ProductCreateInput) {
    const product = await this.databaseService.product.create({
      data: {
        name: input.name,
        description: input.description,
        slug: `${nanoid()}_${v4()}`,
        workspaceId: input.workspace_id,
        userId: input.user_id,
        image: input.productImage,
        category: {
          connect: {
            id:
              input.productCategoryId.length > 0
                ? input.productCategoryId
                : undefined,
          },
        },
      },
    });
    const pricing = await this.databaseService.pricing.update({
      where: { id: input.productPricingId },
      data: { product: { connect: { id: product.id } } },
    });

    return { ...product, pricings: [pricing] };
  }

  async createCategory(input: CategoryCreateInput) {
    return await this.databaseService.category.create({
      data: {
        name: input.name,
        published: input.is_published,
        workspaceId: input.workspace_id,
        userId: input.user_id,
        slug: `${nanoid()}_${v4()}`,
        description: input.description,
      },
    });
  }

  async createPricing(input: PricingCreateInput) {
    return await this.databaseService.pricing.create({
      data: {
        currency: input.currency,
        amount: (input.amount * 1000).toString(10),
        charge_type:
          input.chargeType.toLowerCase() === 'one_time'
            ? 'one_time'
            : 'recurring',
        package_type:
          input.packageType.toLowerCase() === 'flat' ? 'flat' : 'package',
        workspaceId: input.workspace_id,
        userId: input.user_id,
      },
    });
  }

  async categories(input: CategoriesInput) {
    return await this.databaseService.category.findMany({
      where: { workspaceId: input.workspace_id },
    });
  }

  async products(input: CategoriesInput) {
    return await this.databaseService.product.findMany({
      where: { workspaceId: input.workspace_id },
      include: { category: true, pricings: true },
    });
  }
}
