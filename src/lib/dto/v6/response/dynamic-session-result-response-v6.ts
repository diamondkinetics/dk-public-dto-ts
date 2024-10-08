import { AbstractUserOwnedResponseV6 } from './abstract-user-owned-response-v6';
import { DynamicSessionBlockResultResponseV6 } from './dynamic-session-block-result-response-v6';

export interface DynamicSessionResultResponseV6 extends AbstractUserOwnedResponseV6 {
  activityUuid: string;
  blocks: DynamicSessionBlockResultResponseV6[];
}
