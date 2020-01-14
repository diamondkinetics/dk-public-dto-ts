import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';

export interface CompetitionLevelDTOV2 extends AbstractSyncableDTOV2 {
	name?: string;
	sortOrder?: number;
	underThirteen?: boolean;
}
