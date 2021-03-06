import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import { BattingOrientation, DKSubscription, PlayType, Position } from '../../enum';
import { UserProfileDTOV2 } from '../../dto';

import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';
import { mockUserAppVersionOverrideDTOV2 } from './user-app-version-override.dto.v2.mock';

const appVersionOverrides = cookyCutter.array(mockUserAppVersionOverrideDTOV2, 3);

export const mockUserProfileDTOV2 = cookyCutter.define<UserProfileDTOV2>({
	...mockAbstractSyncableDTOV2(),
	primaryEmail: faker.internet.email(),
	nickname: faker.internet.userName(),
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	teamName: faker.company.companyName(),
	secondaryEmail: faker.internet.email(),
	bouncing: faker.random.boolean(),
	secondaryBouncing: faker.random.boolean(),
	claimSwingPlaneMetrics: faker.random.boolean(),
	birthDate: faker.date.past(18).toISOString(),
	height: faker.random.number(80).toString(),
	weight: faker.random.number(250).toString(),
	playType: PlayType.BASEBALL.getName,
	battingOrientation: BattingOrientation.RIGHTY.getName,
	throwsHandedness: BattingOrientation.RIGHTY.getName,
	competitionLevelUuid: faker.random.uuid(),
	coach: faker.random.boolean(),
	hideFromSearch: faker.random.boolean(),
	zipCode: faker.address.zipCode(),
	profileImageUrl: faker.image.imageUrl(),
	userMetaData: faker.random.objectElement(),
	youthRegistration: faker.random.boolean(),
	claimProfileEditingAllowed: faker.random.boolean(),
	claimConnectionsAreAllowed: faker.random.boolean(),
	claimVideoPersistingAllowed: faker.random.boolean(),
	claimVideoSharingAllowed: faker.random.boolean(),
	trialing: faker.random.boolean(),
	activeMembership: faker.random.boolean(),
	claimAllMetricsViewable: faker.random.boolean(),
	claimGroupsAreAllowed: faker.random.boolean(),
	claimWebHooksAreAllowed: faker.random.boolean(),
	claimAnalysisAllowed: faker.random.boolean(),
	claimTrainingContentAllowed: faker.random.boolean(),
	accountStatus: faker.random.word(),
	renewalDate: faker.date.future(1).toISOString(),
	appleRenewalDate: faker.date.future(1).toISOString(),
	subscribed: faker.random.boolean(),
	subscribedTo: DKSubscription.ANNUAL_PREMIUM_HITTER.getName,
	hadApplePaymentApplied: faker.random.boolean(),
	referringOrganizationUuid: faker.random.uuid(),
	pitchingAccountStatus: faker.random.word(),
	pitchingRenewalDate: faker.date.future(1).toISOString(),
	pitchingAppleRenewalDate: faker.date.future(1).toISOString(),
	pitchingHadApplePaymentApplied: faker.random.boolean(),
	pitchingTrialing: faker.random.boolean(),
	pitchingActiveMembership: faker.random.boolean(),
	pitchingSubscribed: faker.random.boolean(),
	pitchingSubscribedTo: DKSubscription.ANNUAL_PREMIUM_PITCHER.getName,
	axonBaseballId: faker.random.uuid(),
	axonSoftballId: faker.random.uuid(),
	hittingGoal: faker.random.number(),
	paidViaLicense: faker.random.boolean(),
	licenseOwner: faker.random.boolean(),
	paidLicensesForCurrentBillingCycle: faker.random.number(),
	appVersionOverrides,
	state: faker.address.stateAbbr(),
	graduationYear: faker.date.future().getFullYear().toString(),
	position: Position.CENTER_FIELD.getName
});
