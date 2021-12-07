import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import {
    AdminUserAccountCollectionResponseV5,
    AdminUserAccountResponseV5,
    UserAccountResponseV5 } from "../../dto";
import { AccountStatus, PaymentSource, SubscriptionType } from "../../enum";
import { mockAbstractTimeStampResponseV5 } from "./abstract-timestamp.dto.v5.mock";
import { mockCollectionResponseV5 } from "./collection.dto.v5.mock";
import { mockUserProfileEnhancedResponseV5 } from "./user-profile.dto.v5.mock";

export const mockUserAccountResponseV5 = (subscriptionType: string = SubscriptionType.HITTING.getName) => {
    return cookyCutter.define<UserAccountResponseV5>({
        ...mockAbstractTimeStampResponseV5(),
        trialing: faker.random.boolean(),
        activeMembership: faker.random.boolean(),
        accountStatus: AccountStatus.PAID.getName,
        renewalDate: faker.date.future(0.5).toISOString(),
        appleRenewalDate: faker.date.future(0.5).toISOString(),
        subscribed: faker.random.boolean(),
        subscribedTo: subscriptionType,
        hadApplePaymentApplied: faker.random.boolean(),
        paidViaLicense: faker.random.boolean(),
        licenseOwner: faker.random.boolean(),
        paidLicensesForCurrentBillingCycle: faker.random.number(10)
    })
};

export const mockAdminUserAccountResponseV5 = cookyCutter.define<AdminUserAccountResponseV5>({
    ...mockUserAccountResponseV5()(),
    user: mockUserProfileEnhancedResponseV5(),
    subscriptionType: '',
    originalTransactionId: faker.random.uuid(),
    appleReceiptData: '',
    customerId: faker.random.alphaNumeric(10),
    subscriptionId: faker.random.alphaNumeric(10),
    paymentSource: PaymentSource.APPLE.getName
});

export const mockAdminUserAccountCollectionResponseV5 = cookyCutter.define<AdminUserAccountCollectionResponseV5>({
   ...mockCollectionResponseV5<AdminUserAccountResponseV5>(mockAdminUserAccountResponseV5)()
});