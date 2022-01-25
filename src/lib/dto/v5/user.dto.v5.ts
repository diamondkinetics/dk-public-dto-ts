import { AbstractSyncableResponseV5 } from './abstract-syncable.dto.v5';

export interface UserResponseV5 extends AbstractSyncableResponseV5 {
	firstName: string;
	lastName: string;
	nickname?: string;
	email?: string;
	secondaryEmail?: string;
	coach: boolean;
}
