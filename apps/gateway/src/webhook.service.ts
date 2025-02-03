import { Injectable } from '@nestjs/common';
import { PrismaService } from 'libs/database/src';

@Injectable()
export class WebhookService {
  constructor(private readonly databaseService: PrismaService) {}

  async lockWorkspaceAccount(stripeAccountId: string) {
    return await this.databaseService.workspace.updateManyAndReturn({
      where: { stripe_account_id: stripeAccountId! },
      data: { stripe_account_disabled: true },
    });
  }

  async disableWorkspaceAccount(stripeAccountId: string) {
    return await this.databaseService.workspace.updateManyAndReturn({
      where: { stripe_account_id: stripeAccountId! },
      data: { stripe_account_verified: false },
    });
  }

  async enableWorkspaceAccount(stripeAccountId: string) {
    return await this.databaseService.workspace.updateManyAndReturn({
      where: { stripe_account_id: stripeAccountId! },
      data: { stripe_account_verified: true },
    });
  }
}
