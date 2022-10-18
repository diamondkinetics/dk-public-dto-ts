import { AbstractUserOwnedResponseV6 } from './abstract-user-owned-response-v6';
import { AccountGroupMembershipCollectionResponseV6 } from './account-group-membership-collection-response-v6';

export interface AccountGroupResponseV6 extends AbstractUserOwnedResponseV6 {
  memberships: AccountGroupMembershipCollectionResponseV6;  
}
