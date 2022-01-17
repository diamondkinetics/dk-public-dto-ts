import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';

import {
    AdminUserAccountCollectionResponseV5,
    AdminUserAccountResponseV5,
    UserAccountResponseV5
} from './../../dto/v5/user-account.dto.v5';
import { UserProfileEnhancedResponseV5, UserProfileResponseV5 } from './../../dto/v5/user-profile.dto.v5';
import { AccountStatus } from './../../enum/account-status';
import { BattingOrientation } from './../../enum/batting-orientation';
import { DKSubscription } from './../../enum/dk-subscription';
import { PaymentSource } from './../../enum/payment-source';
import { PlayType } from './../../enum/play-type';
import { Position } from './../../enum/position';
import { SubscriptionType } from './../../enum/subscription-type';
import { mockAbstractSyncableResponseV5 } from './abstract-syncable.dto.v5.mock';
import { mockAbstractTimeStampResponseV5 } from "./abstract-timestamp.dto.v5.mock";
import { mockCollectionResponseV5 } from "./collection.dto.v5.mock";

const baseMockUserAccountResponseV5: UserAccountResponseV5 = {
    ...mockAbstractTimeStampResponseV5(),
    trialing: faker.random.boolean(),
    activeMembership: faker.random.boolean(),
    accountStatus: AccountStatus.PAID.getName(),
    renewalDate: faker.date.future(0.5).toISOString(),
    appleRenewalDate: faker.date.future(0.5).toISOString(),
    subscribed: faker.random.boolean(),
    hadApplePaymentApplied: faker.random.boolean(),
    paidViaLicense: faker.random.boolean(),
    licenseOwner: faker.random.boolean(),
    paidLicensesForCurrentBillingCycle: faker.random.number(10),
    subscribedTo: DKSubscription.MONTHLY_PREMIUM_HITTER.getName()
};

export const mockHittingUserAccountResponseV5 = cookyCutter.define<UserAccountResponseV5>({
    ...baseMockUserAccountResponseV5
});

export const mockPitchingUserAccountResponseV5 = cookyCutter.define<UserAccountResponseV5>({
    ...baseMockUserAccountResponseV5,
    subscribedTo: DKSubscription.MONTHLY_PREMIUM_PITCHER.getName()
});


// The following two mocks are needed to avoid circular dependency issues between these mocks and the v5 user profile
// dto mocks.
const mockUserProfileResponseV5 = cookyCutter.define<UserProfileResponseV5>({
    ...mockAbstractSyncableResponseV5(),
    primaryEmail: faker.internet.email(),
    nickname: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    secondaryEmail: faker.internet.email(),
    preferences: '',
    bouncing: faker.random.boolean(),
    secondaryBouncing: faker.random.boolean(),
    birthDate: faker.date.past(15).toISOString(),
    height: faker.random.number({max: 84, min: 36, precision: 1}).toString(),
    weight: faker.random.number({max: 300, min: 50, precision: 1}).toString(),
    playType: PlayType.BASEBALL.getName(),
    battingOrientation: BattingOrientation.RIGHTY.getName(),
    throwsHandedness: BattingOrientation.RIGHTY.getName(),
    competitionLevelUuid: faker.random.uuid(),
    coach: faker.random.boolean(),
    privateProfile: faker.random.boolean(),
    zipCode: faker.address.zipCode(),
    profileImageUrl: faker.internet.avatar(),
    userMetaData: '',
    youthRegistration: faker.random.boolean(),
    referringOrganizationUuid: faker.random.uuid(),
    state: faker.address.stateAbbr(),
    graduationYear: faker.date.future(8).getFullYear.toString(),
    position: Position.CENTER_FIELD.getName(),
    mlbId: faker.random.uuid(),
    hittingAccount: () => mockHittingUserAccountResponseV5(),
    pitchingAccount: () => mockPitchingUserAccountResponseV5()
});

const mockUserProfileEnhancedResponseV5 = cookyCutter.define<UserProfileEnhancedResponseV5>({
    ...mockUserProfileResponseV5(),
    customerId: faker.random.alphaNumeric(10)
});

const baseMockAdminUserAccountResponseV5: AdminUserAccountResponseV5 = {
    ...mockHittingUserAccountResponseV5(),
    user: mockUserProfileEnhancedResponseV5(),
    subscriptionType: SubscriptionType.HITTING.getName(),
    originalTransactionId: faker.random.uuid(),
    appleReceiptData: faker.random.number(20000).toString(),
    customerId: faker.random.alphaNumeric(10),
    subscriptionId: faker.random.alphaNumeric(10),
    paymentSource: PaymentSource.APPLE.getName()
};

export const mockAdminHittingUserAccountResponseV5 = cookyCutter.define<AdminUserAccountResponseV5>({
    ...baseMockAdminUserAccountResponseV5
});

export const mockAdminPitchingUserAccountResponseV5 = cookyCutter.define<AdminUserAccountResponseV5>({
    ...baseMockAdminUserAccountResponseV5,
    subscriptionType: SubscriptionType.PITCHING.getName()
});

export const mockAdminUserAccountCollectionResponseV5 = cookyCutter.define<AdminUserAccountCollectionResponseV5>({
   ...mockCollectionResponseV5<AdminUserAccountResponseV5>(mockAdminHittingUserAccountResponseV5)()
});
