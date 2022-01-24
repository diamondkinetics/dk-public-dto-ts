import { extend } from 'cooky-cutter';
import { date, internet, name, helpers, random, image, address } from 'faker';

import { BattingOrientation } from './../../enum/batting-orientation';
import { DKSubscription } from './../../enum/dk-subscription';
import { PlayType } from './../../enum/play-type';
import { Position } from './../../enum/position';
import { AbstractSyncableDTOV3 } from './../../dto/v3/abstract-syncable.dto.v3';
import { UserProfileDTOV3 } from './../../dto/v3/user-profile.dto.v3';
import { mockUserAppVersionOverrideDTOV2 } from './../v2/user-app-version-override.dto.v2.mock';
import { mockAbstractSyncableDTOV3 } from './abstract-syncable.dto.v3.mock';

export const mockUserProfileDTOV3 = extend<AbstractSyncableDTOV3, UserProfileDTOV3>(mockAbstractSyncableDTOV3, {
	primaryEmail: () => internet.email(),
	nickname: () => internet.userName(),
	firstName: () => name.firstName(),
	lastName: () => name.lastName(),
	secondaryEmail: () => internet.email(),
	preferences: () => JSON.stringify(random.objectElement()),
	bouncing: () => random.boolean(),
	secondaryBouncing: () => random.boolean(),
	claimSwingPlaneMetrics: () => random.boolean(),
	birthDate: () => date.past(18).toISOString(),
	height: () => random.number(80).toString(),
	weight: () => random.number(250).toString(),
	playType: () => helpers.randomize(PlayType.asArray(true).map(pt => pt.getName())),
	battingOrientation: () => helpers.randomize(BattingOrientation.asArray().map(bo => bo.getName())),
	throwsHandedness: () => helpers.randomize(BattingOrientation.asArray(true).map(bo => bo.getName())),
	competitionLevelUuid: () => random.uuid(),
	coach: () => random.boolean(),
	hideFromSearch: () => random.boolean(),
	zipCode: () => address.zipCode(),
	profileImageUrl: () => image.imageUrl(),
	userMetaData: () => random.objectElement(),
	youthRegistration: () => random.boolean(),
	trialing: () => random.boolean(),
	activeMembership: () => random.boolean(),
	accountStatus: () => random.word(),
	renewalDate: () => date.future(1).toISOString(),
	appleRenewalDate: () => date.future(1).toISOString(),
	subscribed: () => random.boolean(),
	subscribedTo: () => helpers.randomize(
		[DKSubscription.ANNUAL_PREMIUM_HITTER.getName(), DKSubscription.MONTHLY_PREMIUM_HITTER.getName()]
	),
	hadApplePaymentApplied: () => random.boolean(),
	referringOrganizationUuid: () => random.uuid(),
	pitchingAccountStatus: () => random.word(),
	pitchingRenewalDate: () => date.future(1).toISOString(),
	pitchingAppleRenewalDate: () => date.future(1).toISOString(),
	pitchingHadApplePaymentApplied: () => random.boolean(),
	pitchingTrialing: () => random.boolean(),
	pitchingActiveMembership: () => random.boolean(),
	pitchingSubscribed: () => random.boolean(),
	pitchingSubscribedTo: () => helpers.randomize(
		[DKSubscription.ANNUAL_PREMIUM_PITCHER.getName(), DKSubscription.MONTHLY_PREMIUM_PITCHER.getName()]
	),
	axonBaseballId: () => random.uuid(),
	axonSoftballId: () => random.uuid(),
	paidViaLicense: () => random.boolean(),
	licenseOwner: () => random.boolean(),
	paidLicensesForCurrentBillingCycle: () => random.number(),
	appVersionOverrides: () => Array.from({ length: 3 }, () => mockUserAppVersionOverrideDTOV2()),
	state: () => address.stateAbbr(),
	graduationYear: () => date.future().getFullYear().toString(),
	position: () => helpers.randomize<string>(Position.asArray().map(p => p.getName()))
});
