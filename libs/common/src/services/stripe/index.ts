import { Injectable, OnModuleInit } from '@nestjs/common';
import Stripe from 'stripe';
import { CreateStripeAccountInput } from './inputs/create-workspace';

@Injectable()
export class StripeService implements OnModuleInit {
  private stripe: Stripe;

  onModuleInit() {
    this.stripe = new Stripe(process.env.SECRET_STRIPE_KEY, {
      apiVersion: '2024-12-18.acacia',
    });
  }

  async createWorkspaceAccount({
    type = 'express',
    companyType = 'company',
    email,
    name,
    country = 'CA',
  }: CreateStripeAccountInput) {
    return await this.stripe.accounts.create({
      type: type,
      country: country,
      business_type: companyType,
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
    });
  }
}
