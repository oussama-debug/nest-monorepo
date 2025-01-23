export type CreateStripeAccountInput = {
  type?: 'custom' | 'express' | 'standard';
  email: string;
  name: string;
  companyType?: 'individual' | 'company';
  country?: string;
};
