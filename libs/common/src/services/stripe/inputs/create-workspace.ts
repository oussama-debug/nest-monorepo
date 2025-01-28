export interface CreateStripeAccountInput {
  email: string;
  name: string;
  companyType?: 'individual' | 'company';
  country?: string;
}
