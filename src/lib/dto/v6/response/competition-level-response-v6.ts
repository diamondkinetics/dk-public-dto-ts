import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';

export interface CompetitionLevelResponseV6 extends AbstractSyncableResponseV6 {
  name: string;
  sortOrder: number;
  underThirteen: boolean;
}
