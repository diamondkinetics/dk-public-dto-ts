export interface SubscriptionResponseV6 {
  subscriptionType: string;
  subscribedTo?: string;
  subscribedToAppleProductId?: string;
  subscribedToStripeProductId?: string;
  accountStatus: string;
  paymentSource?: string;
  appleRenewalDate?: string;
  stripeRenewalDate?: string;
  setToRenew: boolean;
  effectiveUntilDate?: string;
}
