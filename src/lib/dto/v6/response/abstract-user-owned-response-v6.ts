import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';
import { UserProfileResponseV6 } from './user-profile-response-v6';
export interface AbstractUserOwnedResponseV6 extends AbstractSyncableResponseV6 {
  user: UserProfileResponseV6;
}
