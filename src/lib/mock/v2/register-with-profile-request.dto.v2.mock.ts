import * as cookyCutter from 'cooky-cutter';

import { RegisterWithProfileRequestDTOV2 } from '../../dto';
import { mockUserProfileDTOV2 } from './';

const userProfile = mockUserProfileDTOV2();

export const mockRegisterWithProfileRequestDTOV2 = cookyCutter.define<RegisterWithProfileRequestDTOV2>({
	firstName: userProfile.firstName,
	lastName: userProfile.lastName,
	email: userProfile.primaryEmail,
	username: userProfile.nickname,
	password: 'temporary',
	preferences: userProfile.preferences,
	competitionLevelUuid: userProfile.competitionLevelUuid,
	coach: userProfile.coach ?? false,
	zipCode: userProfile.zipCode,
	birthDate: userProfile.birthDate,
	height: userProfile.height,
	weight: userProfile.weight,
	profileImageUrl: userProfile.profileImageUrl,
	battingOrientation: userProfile.battingOrientation,
	playType: userProfile.playType,
	hittingGoal: userProfile.hittingGoal,
	privateProfile: false,
	userMetaData: userProfile.userMetaData,
	teamName: null,
	teamUuid: null,
	source: null
});
