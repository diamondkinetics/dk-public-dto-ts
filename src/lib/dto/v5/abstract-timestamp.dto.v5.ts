import { AbstractSyncableUpdateRequestV5 } from "./abstract-syncable.dto.v5";

export type AbstractTimestampUpdateResponse = AbstractSyncableUpdateRequestV5;

export interface AbstractTimestampResponseV5 {
	serverCreatedTime: string;
	serverUpdatedTime: string;
}
