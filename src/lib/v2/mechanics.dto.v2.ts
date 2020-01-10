import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';

export interface MechanicsDTOV2 extends AbstractSyncableDTOV2 {
	swingUuid?: string;
	mechanicType: number;
	value: string;
}
