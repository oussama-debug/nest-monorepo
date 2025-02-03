import { PrismaService } from 'libs/database/src';
import { CreateWorkspaceInput } from './inputs/input-create-workspace';
import { generateSubdomain } from '../common/constants/words';
import { nanoid } from 'nanoid';
import { Injectable } from '@nestjs/common';
import { StripeService } from '@app/common/services/stripe';
import { MembershipType, Workspace } from '@app/database';

@Injectable()
export class CustomerService {
  constructor(
    private readonly databaseService: PrismaService,
    private readonly stripeService: StripeService,
  ) {}

  async createWorkspace(
    input: CreateWorkspaceInput,
  ): Promise<Workspace | null> {
    const subdomain = generateSubdomain({
      wordCount: 3,
      includeNumbers: true,
      numberLength: 6,
    });

    const stripe_account = await this.stripeService.createWorkspaceAccount({
      name: subdomain,
      country: 'CA',
      companyType: 'individual',
      email: input.ownerUsername,
    });

    const workspace = await this.databaseService.workspace.create({
      data: {
        name: input.name,
        description: input.description,
        subdomain: subdomain,
        services: input.services,
        reference: `${crypto.randomUUID()}_${nanoid()}_workspace`,
        memberships: {
          create: {
            user: { connect: { id: input.ownerId } },
            roles: [MembershipType.owner],
          },
        },
        stripe_account_id: stripe_account.id,
      },
      include: { memberships: true },
    });

    return workspace;
  }

  async findWorkspacesByOwner(id: string) {
    return await this.databaseService.workspace.findMany({
      where: { memberships: { some: { userId: id } } },
      include: { memberships: true },
    });
  }

  async findCustomers(ids: string[]) {
    return await this.databaseService.user.findMany({
      where: { id: { in: ids } },
    });
  }

  async findWorkspaces(ids: string[]) {
    return await this.databaseService.workspace.findMany({
      where: { id: { in: ids } },
    });
  }
}
