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

const mockBaseUserAccountResponseV5: UserAccountResponseV5 = {
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
    subscribedTo: SubscriptionType.HITTING.getName()
};

export const mockHittingUserAccountResponseV5 = cookyCutter.define<UserAccountResponseV5>({
    ...mockBaseUserAccountResponseV5
});

export const mockPitchingUserAccountResponseV5 = cookyCutter.define<UserAccountResponseV5>({
    ...mockBaseUserAccountResponseV5,
    subscribedTo: SubscriptionType.PITCHING.getName()
});

export const mockAdminUserAccountResponseV5 = (subscriptionType: SubscriptionType = SubscriptionType.HITTING) => {
    let subscribedTo: string;
    switch (subscriptionType) {
        case SubscriptionType.PITCHING:
            subscribedTo = DKSubscription.MONTHLY_PREMIUM_PITCHER.getName();
            break;
        default:
            subscribedTo = DKSubscription.MONTHLY_PREMIUM_HITTER.getName();
    }
    return cookyCutter.define<AdminUserAccountResponseV5>({
        ...mockHittingUserAccountResponseV5(),
        user: mockUserProfileEnhancedResponseV5(),
        subscriptionType: subscriptionType.getName,
        originalTransactionId: faker.random.uuid(),
        appleReceiptData: faker.random.number(20000).toString(),
        customerId: faker.random.alphaNumeric(10),
        subscriptionId: faker.random.alphaNumeric(10),
        paymentSource: PaymentSource.APPLE.getName()
    });
};

export const mockAdminUserAccountCollectionResponseV5 = cookyCutter.define<AdminUserAccountCollectionResponseV5>({
   ...mockCollectionResponseV5<AdminUserAccountResponseV5>(mockAdminUserAccountResponseV5())()
});
