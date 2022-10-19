import { CollectionResponseSummaryV6 } from './collection-response-summary-v6';

export interface AbstractSyncableCollectionResponseSummaryV6 extends CollectionResponseSummaryV6 {
  countDeleted?: number;
  maxLastUpdated?: string;
}
