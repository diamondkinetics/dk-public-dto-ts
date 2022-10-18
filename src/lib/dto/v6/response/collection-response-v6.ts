import { CollectionResponseSummaryV6 } from './collection-response-summary-v6';

export interface CollectionResponseV6<T> extends CollectionResponseSummaryV6 {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  data: T[];
}
