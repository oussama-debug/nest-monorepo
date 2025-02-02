import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateStripeAccountInput } from './inputs/create-workspace';
import Stripe from 'stripe';

@Injectable()
export class StripeService implements OnModuleInit {
  private stripe: Stripe;

  onModuleInit() {
    this.stripe = new Stripe(process.env.SECRET_STRIPE_KEY, {
      apiVersion: '2025-01-27.acacia',
    });
  }

  async createWorkspaceAccount({
    companyType = 'company',
    email,
    name,
    country = 'CA',
  }: CreateStripeAccountInput) {
    return await this.stripe.accounts.create({
      country: country,
      business_type: companyType,
      email: email,
      business_profile: {
        url: `https://${name}.mybeautymaster.shop`,
      },
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
      controller: {
        fees: { payer: 'account' },
        losses: { payments: 'stripe' },
        stripe_dashboard: { type: 'none' },
      },
    });
  }

  async constructWebhookEvent(
    payload: string | Buffer,
    signature: string,
    secret: string,
  ) {
    return this.stripe.webhooks.constructEvent(payload, signature, secret);
  }

  async createAccountLink(accountId: string) {
    return await this.stripe.accountLinks.create({
      account: accountId,
      refresh_url: `${process.env.PUBLIC_ENDPOINT}/business/dashboard`,
      return_url: `${process.env.PUBLIC_ENDPOINT}/business/dashboard`,
      type: 'account_onboarding',
    });
  }

  async requirementsIsNeeded(account: Stripe.Account) {
    const { currently_due, past_due } = account.requirements;
    const { disabled_reason } = account.future_requirements;

    if (disabled_reason) {
      return {
        stripeAccountComplete: false,
        disabledReason: disabled_reason,
      };
    }

    if (currently_due.length > 0 || past_due.length > 0) {
      return {
        stripeAccountComplete: false,
        requirements: [...currently_due, ...past_due],
      };
    }
    return { stripeAccountComplete: false };
  }
}
