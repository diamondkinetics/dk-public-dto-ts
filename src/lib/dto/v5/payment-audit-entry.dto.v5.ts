import { AbstractTimestampResponseV5 } from './abstract-timestamp.dto.v5';
import { UserResponseV5 } from './user.dto.v5';
import { CollectionResponseV5 } from './collection.dto.v5';

export interface PaymentAuditEntryResponseV5 extends AbstractTimestampResponseV5 {
	user: UserResponseV5;
	subscriptionType: string;
	startingStatus: string;
	endingStatus: string;
	type: string;
	details: string;
	paymentSource: string;
	renewalDate: string;
	couponId: string;
}

export interface PaymentAuditEntryCollectionResponseV5 extends CollectionResponseV5<PaymentAuditEntryResponseV5> {}
