import { define, extend } from 'cooky-cutter';
import { date, random } from 'faker';

import {
    AbstractSyncableCollectionResponseSummaryV5,
    AbstractSyncableResponseV5,
    AbstractSyncableUpdateRequestV5
} from './../../dto/v5/abstract-syncable.dto.v5';
import { CollectionResponseSummaryV5 } from './../../dto/v5/collection.dto.v5';
import { AbstractTimestampResponseV5 } from './../../dto/v5/abstract-timestamp.dto.v5';
import { mockAbstractTimeStampResponseV5 } from './abstract-timestamp.dto.v5.mock';
import { mockCollectionResponseSummaryV5 } from './collection.dto.v5.mock';

export const mockAbstractSyncableUpdateRequestV5 = define<AbstractSyncableUpdateRequestV5>({
    clientUpdatedTime: () => date.recent(1).toISOString(),
    deleted: () => random.boolean()
});

export const mockAbstractSyncableResponseV5 = extend<AbstractTimestampResponseV5, AbstractSyncableResponseV5>(
    mockAbstractTimeStampResponseV5,
    {
        clientCreatedTime: () => date.past(1).toISOString(),
        clientUpdatedTime: () => date.recent(1).toISOString(),
        uuid: () => random.uuid(),
        deleted: () => random.boolean()
    }
);

export const mockAbstractSyncableCollectionResponseSummaryV5 = extend<
    CollectionResponseSummaryV5,
    AbstractSyncableCollectionResponseSummaryV5
>(
    mockCollectionResponseSummaryV5,
    {
        countDeleted: 1,
        maxLastUpdated: () => date.recent(7).toISOString()
    }
);
