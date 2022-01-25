import { define, extend } from 'cooky-cutter';
import { address, date, helpers, internet, name, random } from 'faker';

import { AbstractSyncableResponseV5 } from './../../dto/v5/abstract-syncable.dto.v5';
import { AbstractTimestampResponseV5 } from './../../dto/v5/abstract-timestamp.dto.v5';
import {
    AdminUserAccountCollectionResponseV5,
    AdminUserAccountResponseV5,
    UserAccountResponseV5
} from './../../dto/v5/user-account.dto.v5';
import { UserProfileResponseV5, UserProfileEnhancedResponseV5 } from './../../dto/v5/user-profile.dto.v5';
import { AccountStatus } from './../../enum/account-status';
import { BattingOrientation } from './../../enum/batting-orientation';
import { DKSubscription } from './../../enum/dk-subscription';
import { PaymentSource } from './../../enum/payment-source';
import { PlayType } from './../../enum/play-type';
import { Position } from './../../enum/position';
import { SubscriptionType } from './../../enum/subscription-type';
import { mockAbstractTimeStampResponseV5 } from './abstract-timestamp.dto.v5.mock';
import { mockAbstractSyncableResponseV5 } from './abstract-syncable.dto.v5.mock';
import { mockCollectionResponseV5 } from "./collection.dto.v5.mock";

const mockUserProfileResponseV5 = extend<AbstractSyncableResponseV5, UserProfileResponseV5>(
    mockAbstractSyncableResponseV5,
    {
        primaryEmail: () => internet.email(),
        nickname: () => internet.userName(),
        firstName: () => name.firstName(),
        lastName: () => name.lastName(),
        secondaryEmail: () => internet.email(),
        preferences: () => '',
        bouncing: () => random.boolean(),
        secondaryBouncing: () => random.boolean(),
        birthDate: () => date.past(15).toISOString(),
        height: () => random.number({max: 84, min: 36, precision: 1}).toString(),
        weight: () => random.number({max: 300, min: 50, precision: 1}).toString(),
        playType: () => helpers.randomize(PlayType.asArray(true).map(pt => pt.getName())),
        battingOrientation: () => helpers.randomize(BattingOrientation.asArray().map(bo => bo.getName())),
        throwsHandedness: () => helpers.randomize(BattingOrientation.asArray(true).map(bo => bo.getName())),
        competitionLevelUuid: () => random.uuid(),
        coach: () => random.boolean(),
        privateProfile: () => random.boolean(),
        zipCode: () => address.zipCode(),
        profileImageUrl: () => internet.avatar(),
        userMetaData: () => '',
        youthRegistration: () => random.boolean(),
        referringOrganizationUuid: () => random.uuid(),
        state: () => address.stateAbbr(),
        graduationYear: () => date.future(8).getFullYear.toString(),
        position: () => helpers.randomize(Position.asArray().map(p => p.getName())),
        mlbId: () => random.uuid(),
        hittingAccount: () => mockHittingUserAccountResponseV5(),
        pitchingAccount: () => mockPitchingUserAccountResponseV5()
    }
);

const mockUserProfileEnhancedResponseV5 = extend<UserProfileResponseV5, UserProfileEnhancedResponseV5>(
    mockUserProfileResponseV5,
    { customerId: () => random.alphaNumeric(10) }
);

export const mockHittingUserAccountResponseV5 = extend<AbstractTimestampResponseV5, UserAccountResponseV5>(
    mockAbstractTimeStampResponseV5,
    {
        trialing: () => random.boolean(),
        activeMembership: () => random.boolean(),
        accountStatus: AccountStatus.PAID.getName(),
        renewalDate: () => date.future(0.5).toISOString(),
        appleRenewalDate: () => date.future(0.5).toISOString(),
        subscribed: () => random.boolean(),
        hadApplePaymentApplied: () => random.boolean(),
        paidViaLicense: () => random.boolean(),
        licenseOwner: () => random.boolean(),
        paidLicensesForCurrentBillingCycle: () => random.number(10),
        subscribedTo: DKSubscription.MONTHLY_PREMIUM_HITTER.getName()
    }
);

export const mockPitchingUserAccountResponseV5 = extend<UserAccountResponseV5, UserAccountResponseV5>(
    mockHittingUserAccountResponseV5,
    { subscribedTo: DKSubscription.MONTHLY_PREMIUM_PITCHER.getName() }
);

export const mockAdminHittingUserAccountResponseV5 = extend<UserAccountResponseV5, AdminUserAccountResponseV5>(
    mockHittingUserAccountResponseV5,
    {
        user: () => mockUserProfileEnhancedResponseV5(),
        subscriptionType: SubscriptionType.HITTING.getName(),
        originalTransactionId: () => random.uuid(),
        appleReceiptData: () => random.number(20000).toString(),
        customerId: () => random.alphaNumeric(10),
        subscriptionId: () => random.alphaNumeric(10),
        paymentSource: PaymentSource.APPLE.getName()
    }
);

export const mockAdminPitchingUserAccountResponseV5 = extend<AdminUserAccountResponseV5, AdminUserAccountResponseV5>(
    mockAdminHittingUserAccountResponseV5,
    { subscriptionType: SubscriptionType.PITCHING.getName() }
);

export const mockAdminUserAccountCollectionResponseV5 = define<AdminUserAccountCollectionResponseV5>(
   mockCollectionResponseV5<AdminUserAccountResponseV5>(mockAdminHittingUserAccountResponseV5)()
);
