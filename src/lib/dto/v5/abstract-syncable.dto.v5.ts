import { AbstractTimestampResponseV5 } from './abstract-timestamp.dto.v5';
import { CollectionResponseSummaryV5 } from './collection.dto.v5';

export interface AbstractSyncableResponseV5 extends AbstractTimestampResponseV5 {
	clientCreatedTime: string;
	clientUpdatedTime: string;
	uuid: string;
	deleted: boolean;
}

export interface AbstractSyncableCollectionResponseSummaryV5 extends CollectionResponseSummaryV5 {
	countDeleted: number;
	maxLastUpdated: string;
}
