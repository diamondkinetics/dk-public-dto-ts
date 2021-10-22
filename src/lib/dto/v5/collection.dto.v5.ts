import { AbstractReadableResponseV5 } from './abstract-readable.dto.v5';

export interface CollectionResponseSummaryV5 {
	totalCount: number;
}

export interface CollectionResponseV5<RESPONSE extends AbstractReadableResponseV5> extends CollectionResponseSummaryV5 {
	pageNumber: number;
	pageSize: number;
	totalPages: number;
	data: RESPONSE[];
}
