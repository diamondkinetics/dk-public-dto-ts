import { AbstractAdminDTOV1 } from './abstract-admin.dto.v1';
import { UserProfileBasicsDTOV3 } from '../v3';

export interface UserAccountDTOV1 extends AbstractAdminDTOV1 {
	lastUpdate: string;
	creationDate: string;
	user: UserProfileBasicsDTOV3;
	subscriptionType: string;
	originalTransactionId?: string;
	appleRenewalDate?: string;
	hadApplePaymentApplied: boolean;
	appleReceiptData?: string;
	customerId?: string;
	subscriptionId?: string;
	setToRenew: boolean;
	renewalDate?: string;
	accountStatus: string;
	paymentSource?: string;
	subscribedTo?: string;
	licensesOwner: boolean;
	maxActiveLicensesCurrentPeriod?: number;
}
