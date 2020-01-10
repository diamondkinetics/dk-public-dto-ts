import { PlayType } from "../enum/play-type";

export interface CreateCouponRequestDTOV2 {
	creatorFirstName: string;
	creatorLastName: string;
	creatorEmail: string;
	dkSubscription: string;
	durationInMonths: number;
	orderId: number;
	chargeId: string;
	recipientEmails: string[];
	playType?: PlayType;
}
