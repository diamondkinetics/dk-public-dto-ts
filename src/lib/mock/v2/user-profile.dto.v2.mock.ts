import { array, extend } from 'cooky-cutter';
import { address, company, date, helpers, image, internet, name, random } from 'faker';

import { AbstractSyncableDTOV2 } from './../../dto/v2/abstract-syncable.dto.v2';
import { UserProfileDTOV2 } from './../../dto/v2/user-profile.dto.v2';
import { BattingOrientation } from './../../enum/batting-orientation';
import { DKSubscription } from './../../enum/dk-subscription';
import { PlayType } from './../../enum/play-type';
import { Position } from './../../enum/position';
import { mockAbstractSyncableDTOV2 } from './abstract-syncable.dto.v2.mock';
import { mockUserAppVersionOverrideDTOV2 } from './user-app-version-override.dto.v2.mock';

const appVersionOverrides = () => array(mockUserAppVersionOverrideDTOV2, 3);

export const mockUserProfileDTOV2 = extend<AbstractSyncableDTOV2, UserProfileDTOV2>(
	mockAbstractSyncableDTOV2,
	{
		primaryEmail: () => internet.email(),
		nickname: () => internet.userName(),
		firstName: () => name.firstName(),
		lastName: () => name.lastName(),
		teamName: () => company.companyName(),
		secondaryEmail: () => internet.email(),
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
		claimProfileEditingAllowed: () => random.boolean(),
		claimConnectionsAreAllowed: () => random.boolean(),
		claimVideoPersistingAllowed: () => random.boolean(),
		claimVideoSharingAllowed: () => random.boolean(),
		trialing: () => random.boolean(),
		activeMembership: () => random.boolean(),
		claimAllMetricsViewable: () => random.boolean(),
		claimGroupsAreAllowed: () => random.boolean(),
		claimWebHooksAreAllowed: () => random.boolean(),
		claimAnalysisAllowed: () => random.boolean(),
		claimTrainingContentAllowed: () => random.boolean(),
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
		hittingGoal: () => random.number(),
		paidViaLicense: () => random.boolean(),
		licenseOwner: () => random.boolean(),
		paidLicensesForCurrentBillingCycle: () => random.number(),
		appVersionOverrides: appVersionOverrides(),
		state: () => address.stateAbbr(),
		graduationYear: () => date.future().getFullYear().toString(),
		position: () => helpers.randomize(Position.asArray().map(p => p.getName()))
	}
);
