export interface UserProfileBasicsDTOV3 {
	uuid?: string;
	firstName?: string;
	lastName?: string;
	profileImageUrl?: string;
	accountStatus?: string;
	paid?: boolean;
	paidViaLicense?: boolean;
	state?: string;
	graduationYear?: string;
	position?: string;
}
