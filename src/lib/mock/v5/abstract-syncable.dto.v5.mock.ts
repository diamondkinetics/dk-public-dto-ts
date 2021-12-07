import * as cookyCutter from 'cooky-cutter';
import * as faker from 'faker';
import {
    AbstractSyncableCollectionResponseSummaryV5,
    AbstractSyncableResponseV5,
    AbstractSyncableUpdateRequestV5
} from "../../dto";
import { mockAbstractTimeStampResponseV5 } from "./abstract-timestamp.dto.v5.mock";
import { mockCollectionResponseSummaryV5 } from "./collection.dto.v5.mock";

export const mockAbstractSyncableUpdateRequestV5 = cookyCutter.define<AbstractSyncableUpdateRequestV5>({
    clientUpdatedTime: faker.date.recent(1).toISOString(),
    deleted: faker.random.boolean()
});

export const mockAbstractSyncableResponseV5 = cookyCutter.define<AbstractSyncableResponseV5>({
    ...mockAbstractTimeStampResponseV5(),
    clientCreatedTime: faker.date.past(1).toISOString(),
    clientUpdatedTime: faker.date.recent(1).toISOString(),
    uuid: faker.random.uuid(),
    deleted: faker.random.boolean()
});

export const mockAbstractSyncableCollectionResponseSummaryV5 = cookyCutter.define<AbstractSyncableCollectionResponseSummaryV5>({
    ...mockCollectionResponseSummaryV5(),
    countDeleted: 1,
    maxLastUpdated: faker.date.recent(7).toISOString()
});

