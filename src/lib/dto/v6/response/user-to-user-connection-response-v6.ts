import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';
import { UserProfileResponseV6 } from './user-profile-response-v6';

export interface UserToUserConnectionResponseV6 extends AbstractSyncableResponseV6 {
  invitor: UserProfileResponseV6;
  invitee: UserProfileResponseV6;
  confirmed: boolean;
}
