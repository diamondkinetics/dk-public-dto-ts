import { AbstractUserOwnedCreateRequestV6 } from './abstract-user-owned-create-request-v6';
import { DynamicSessionBlockResultCreateRequestV6 } from './dynamic-session-block-result-create-request-v6';

export interface DynamicSessionResultCreateRequestV6 extends AbstractUserOwnedCreateRequestV6 {
  activityUuid: string;
  blockResults: DynamicSessionBlockResultCreateRequestV6[];
}
