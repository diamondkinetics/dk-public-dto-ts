import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import { PaymentAuditEntryCollectionResponseV5, PaymentAuditEntryResponseV5 } from "../../dto";
import { PaymentSource, SubscriptionType } from "../../enum";
import { PaymentStatus } from "../../enum/payment-status";
import { mockAbstractTimeStampResponseV5 } from "./abstract-timestamp.dto.v5.mock";
import { mockCollectionResponseV5 } from "./collection.dto.v5.mock";
import { mockUserResponseV5 } from "./user.dto.v5.mock";

export const mockPaymentAuditEntryResponseV5 = cookyCutter.define<PaymentAuditEntryResponseV5>({
    ...mockAbstractTimeStampResponseV5(),
    user: () => mockUserResponseV5(),
    subscriptionType: () => faker.helpers.randomize(SubscriptionType.asArray().map(st => st.getName())),
    startingStatus: () => PaymentStatus.PRE_TRIAL.getName(),
    endingStatus: () => PaymentStatus.TRIALING.getName(),
    type: () => faker.random.word(),
    details: () => faker.random.words(),
    paymentSource: () => PaymentSource.ENTERPRISE.getName(),
    renewalDate: () => faker.date.future(1).toISOString(),
    couponId: () => faker.random.alphaNumeric()
});

export const mockPaymentAuditEntryCollectionResponseV5 = cookyCutter.define<PaymentAuditEntryCollectionResponseV5>({
   ...mockCollectionResponseV5<PaymentAuditEntryResponseV5>(mockPaymentAuditEntryResponseV5)()
});
