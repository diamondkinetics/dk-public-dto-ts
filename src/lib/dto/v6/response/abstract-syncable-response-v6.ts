import { AbstractTimestampResponseV6 } from './abstract-timestamp-response-v6';

export interface AbstractSyncableResponseV6 extends AbstractTimestampResponseV6 {
  clientCreatedTime: string;
  clientUpdatedTime: string;
  uuid: string;
  deleted: boolean;
}
