import { UserProfileDTOV3 } from '../v3';

export interface AdminUpdateRequestDTOV1 extends UserProfileDTOV3 {
	accountType?: string;
	emailVerified?: boolean;
	newPassword?: string;
}
