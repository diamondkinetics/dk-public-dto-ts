import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';

export interface RoleDTOV2 extends AbstractSyncableDTOV2 {
	shortName?: string;
	fullName?: string;
	desc?: string;
	hierarchy?: number;
	isAdmin?: boolean;
	isMember?: boolean;
}
