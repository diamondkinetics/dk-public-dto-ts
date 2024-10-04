import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';
import { DynamicSessionBlockResultResponseV6 } from './dynamic-session-block-result-response-v6';

export interface DynamicSessionResultResponseV6 extends AbstractSyncableResponseV6 {
  activityUuid: string;
  blocks: DynamicSessionBlockResultResponseV6[];
}
