import { AbstractSyncableResponseV6 } from './abstract-syncable-response-v6';

export interface UserResponseV6 extends AbstractSyncableResponseV6 {
  firstName: string;
  lastName: string;
  profileImageUrl: string;
  coach: boolean;
}
