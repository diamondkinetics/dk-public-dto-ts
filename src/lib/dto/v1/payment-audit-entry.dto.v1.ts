import { UserProfileBasicsDTOV3 } from '../v3';
import { AbstractAdminDTOV1 } from './abstract-admin.dto.v1';

export interface PaymentAuditEntryDTOV1 extends AbstractAdminDTOV1 {
	user: UserProfileBasicsDTOV3;
	subscriptionType: string;
	startingStatus: string;
	endingStatus: string;
	type: string;
	details: string;
	paymentSource: string;
	renewalDate: string;
	couponId: string;
}
