import { AbstractSyncableResponseV5 } from './abstract-syncable.dto.v5';
import { UserResponseV5 } from './user.dto.v5';

export interface AbstractUserOwnedResponseV5 extends AbstractSyncableResponseV5 {
	user: UserResponseV5;
}
