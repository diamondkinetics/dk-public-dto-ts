import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';

export interface AbstractTimeWindowDTOV3 extends AbstractSyncableDTOV3 {
	startDate?: string;
	endDate?: string;
}
