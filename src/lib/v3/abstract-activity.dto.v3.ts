import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';

export interface AbstractActivityDTOV3 extends AbstractSyncableDTOV3 {
	name?: string;
	status?: string;
	startDate?: string;
	endDate?: string;
	resultProgress?: number;
	activityDetails?: string;
	passScore?: number;
	activityType?: string;
	userUuid?: string;
}
