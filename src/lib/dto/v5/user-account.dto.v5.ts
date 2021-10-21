import { AbstractTimestampResponseV5 } from './abstract-timestamp.dto.v5';
import { UserProfileEnhancedResponseV5 } from './user-profile.dto.v5';
import { CollectionResponseV5 } from './collection.dto.v5';

export interface UserAccountResponseV5 extends AbstractTimestampResponseV5 {
	trialing: boolean;
	activeMembership: boolean;
	accountStatus: string;
	renewalDate: string;
	appleRenewalDate: string;
	subscribed: boolean;
	subscribedTo: string;
	hadApplePaymentApplied: boolean;
	paidViaLicense: boolean;
	licenseOwner: boolean;
	paidLicensesForCurrentBillingCycle: number;
}

export interface AdminUserAccountResponseV5 extends UserAccountResponseV5 {
	user: UserProfileEnhancedResponseV5;
	subscriptionType: string;
	originalTransactionId: string;
	appleReceiptData: string;
	customerId: string;
	subscriptionId: string;
	paymentSource: string;
}

export interface AdminUserAccountCollectionResponseV5 extends CollectionResponseV5<AdminUserAccountResponseV5> {}
