export interface UserCredentialResponseV6 {
	email?: string;
	externalId?: string;
	nickname?: string;
	secondaryEmail?: string;
	isPrimary: boolean;
	emailVerified: boolean;
}
