import { CategoryCreateInput } from '@app/common/services/product/inputs/create/create-category-input';
import { CategoriesInput } from '@app/common/services/product/inputs/get/get-categories-input';
import { PrismaService } from '@app/database-products';
import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { v4 } from 'uuid';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: PrismaService) {}

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

  async categories(input: CategoriesInput) {
    return await this.databaseService.category.findMany({
      where: { workspaceId: input.workspace_id },
    });
  }
}
