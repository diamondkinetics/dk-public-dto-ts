import {AbstractSyncableResponseV5, AbstractSyncableUpdateRequestV5} from './abstract-syncable.dto.v5';
import { UserAccountResponseV5 } from './user-account.dto.v5';
import { CollectionResponseV5 } from './collection.dto.v5';

export interface UserProfileUpdateRequestV5 extends AbstractSyncableUpdateRequestV5 {
	playType: string;
	battingOrientation: string;
	throwsHandedness: string;
	competitionLevelUuid: string;
	weight: string;
	height: string;
	zipCode: string;
	birthDate: string;
	nickname: string;
	parentalConsent: boolean;
}

export interface AdminUserProfileUpdateRequestV5 extends UserProfileUpdateRequestV5 {
	accountType: string;
	emailVerified: boolean;
	deleted: boolean;
	coach: boolean;
	email: string;
	firstName: string;
	lastName: string;
}

export interface UserProfileResponseV5 extends AbstractSyncableResponseV5 {
	primaryEmail: string;
	nickname: string;
	firstName: string;
	lastName: string;
	secondaryEmail: string;
	preferences: string;
	bouncing: boolean;
	secondaryBouncing: boolean;
	birthDate: string;
	height: string;
	weight: string;
	playType: string;
	battingOrientation: string;
	throwsHandedness: string;
	competitionLevelUuid: string;
	coach: boolean;
	privateProfile: boolean;
	zipCode: string;
	profileImageUrl: string;
	userMetaData: string;
	youthRegistration: boolean;
	referringOrganizationUuid: string;
	state: string;
	graduationYear: string;
	position: string;
	mlbId: string;
	hittingAccount: UserAccountResponseV5;
	pitchingAccount: UserAccountResponseV5;
}

export interface UserProfileEnhancedResponseV5 extends UserProfileResponseV5 {
	customerId: string;
}

export interface AdminUserProfileResponseV5 extends UserProfileEnhancedResponseV5 {
	accountType: string;
	emailVerified: boolean;
}

export interface UserProfileCollectionResponseV5 extends CollectionResponseV5<UserProfileResponseV5> {}

export interface AdminUserProfileCollectionResponseV5 extends CollectionResponseV5<AdminUserProfileResponseV5> {}
