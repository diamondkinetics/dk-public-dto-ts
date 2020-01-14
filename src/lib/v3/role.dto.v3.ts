import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';

export interface RoleDTOV3 extends AbstractSyncableDTOV3 {
	shortName?: string;
	fullName?: string;
	desc?: string;
	hierarchy?: number;
	isAdmin?: boolean;
	isMember?: boolean;
}
