export interface UserProfileBasicsDTOV2 {
	uuid?: string;
	firstName?: string;
	lastName?: string;
	teamName?: string;
	primaryEmail?: string;
	nickname?: string;
	profileImageUrl?: string;
	height?: string;
	weight?: string;
	battingOrientation?: string;
	throwsHandedness?: string;
	position?: string;
	graduationYear?: string;
	state?: string;
	coach?: boolean;
	deleted?: boolean;
	hittingAccountStatus?: string;
	hittingRenewalDate?: string;
	pitchingAccountStatus?: string;
	pitchingRenewalDate?: string;
}
