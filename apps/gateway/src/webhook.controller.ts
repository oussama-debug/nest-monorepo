import { StripeService } from '@app/common/services/stripe';
import { Controller, Headers, Post, RawBodyRequest, Req } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WebhookService } from './webhook.service';

@Controller('webhooks')
export class WebhookController {
  constructor(
    private readonly stripeService: StripeService,
    private readonly configService: ConfigService,
    private readonly webhookService: WebhookService,
  ) {}

  @Post('/stripe')
  async stripeWebhook(
    @Req() req: RawBodyRequest<Request>,
    @Headers('stripe-signature') stripeSignatureHeader: string,
  ) {
    const signature = stripeSignatureHeader;
    try {
      let event = await this.stripeService.constructWebhookEvent(
        req.rawBody as any,
        signature,
        this.configService.getOrThrow('SECRET_STRIPE_WEBHOOK_SECRET'),
      );

      if (event.type === 'account.updated') {
        const account = event.data.object;
        const result = await this.stripeService.requirementsIsNeeded(account);

        if (result.disabledReason)
          await this.webhookService.lockWorkspaceAccount(account.id);
        if (result.stripeAccountComplete === false)
          await this.webhookService.disableWorkspaceAccount(account.id);
        if (result.stripeAccountComplete === true)
          await this.webhookService.enableWorkspaceAccount(account.id);

        if (process.env.NODE_ENV === 'development')
          await this.webhookService.enableWorkspaceAccount(account.id);
      }

      return { received: true };
    } catch (error) {
      console.error(error);
    }
  }
}
