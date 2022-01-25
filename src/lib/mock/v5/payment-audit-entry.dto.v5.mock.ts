import { define, extend } from 'cooky-cutter';
import { date, helpers, random } from 'faker';

import { AbstractTimestampResponseV5 } from './../../dto/v5/abstract-timestamp.dto.v5';
import {
    PaymentAuditEntryCollectionResponseV5,
    PaymentAuditEntryResponseV5
} from './../../dto/v5/payment-audit-entry.dto.v5';
import { PaymentSource } from './../../enum/payment-source';
import { PaymentStatus } from './../../enum/payment-status';
import { SubscriptionType } from './../../enum/subscription-type';
import { mockAbstractTimeStampResponseV5 } from './abstract-timestamp.dto.v5.mock';
import { mockCollectionResponseV5 } from './collection.dto.v5.mock';
import { mockUserResponseV5 } from './user.dto.v5.mock';

export const mockPaymentAuditEntryResponseV5 = extend<AbstractTimestampResponseV5, PaymentAuditEntryResponseV5>(
    mockAbstractTimeStampResponseV5,
    {
        user: () => mockUserResponseV5(),
        subscriptionType: () => helpers.randomize(SubscriptionType.asArray().map(st => st.getName())),
        startingStatus: PaymentStatus.PRE_TRIAL.getName(),
        endingStatus: PaymentStatus.TRIALING.getName(),
        type: () => random.word(),
        details: () => random.words(),
        paymentSource: PaymentSource.ENTERPRISE.getName(),
        renewalDate: () => date.future(1).toISOString(),
        couponId: () => random.alphaNumeric()
    }
);

export const mockPaymentAuditEntryCollectionResponseV5 = define<PaymentAuditEntryCollectionResponseV5>(
    mockCollectionResponseV5<PaymentAuditEntryResponseV5>(mockPaymentAuditEntryResponseV5)()
);
