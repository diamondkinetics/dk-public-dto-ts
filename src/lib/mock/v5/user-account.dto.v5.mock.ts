import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import {
    AdminUserAccountCollectionResponseV5,
    AdminUserAccountResponseV5,
    UserAccountResponseV5 } from "../../dto";
import {AccountStatus, DKSubscription, PaymentSource, SubscriptionType} from "../../enum";
import { mockAbstractTimeStampResponseV5 } from "./abstract-timestamp.dto.v5.mock";
import { mockCollectionResponseV5 } from "./collection.dto.v5.mock";
import { mockUserProfileEnhancedResponseV5 } from "./user-profile.dto.v5.mock";

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
