import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';

export interface AbstractActivityDTOV2 extends AbstractSyncableDTOV2 {
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
