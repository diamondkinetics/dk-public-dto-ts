import { AbstractSyncableCreateRequestV6 } from './abstract-syncable-create-request-v6';
import { DynamicSessionBlockResultCreateRequestV6 } from './dynamic-session-block-result-create-request-v6';

export interface DynamicSessionResultCreateRequestV6 extends AbstractSyncableCreateRequestV6 {
  activityUuid: string;
  blockResults: DynamicSessionBlockResultCreateRequestV6[];
}
