import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';
import { UserResponseV6 } from './user-response-v6';

export interface AbstractUserOwnedResponseV6 extends AbstractSyncableResponseV6 {
  user: UserResponseV6;
}
