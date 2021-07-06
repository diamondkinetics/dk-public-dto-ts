import { UserProfileDTOV2 } from './user-profile.dto.v2';

export interface CouponRequestDTOV2 {
	code: string;
	forUser?: UserProfileDTOV2;
}
