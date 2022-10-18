import { GroupMembershipRole } from './../../../enum';
import { AbstractUserOwnedResponseV6 } from './abstract-user-owned-response-v6';

export interface AccountGroupMembershipResponseV6 extends AbstractUserOwnedResponseV6 {
  groupUuid: string;
  userRole: GroupMembershipRole;
}
