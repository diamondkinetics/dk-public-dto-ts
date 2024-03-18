import { GroupMembershipRole } from './../../../types/group-membership-role';
import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';
import { UserProfileResponseV6 } from './user-profile-response-v6';

export interface AccountGroupMembershipResponseV6 extends AbstractSyncableResponseV6 {
  groupUuid: string;
  userRole: GroupMembershipRole;
  user: UserProfileResponseV6
}
