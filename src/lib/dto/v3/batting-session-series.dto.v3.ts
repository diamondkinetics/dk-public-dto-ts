import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';

export interface BattingSessionSeriesDTOV3 extends AbstractSyncableDTOV3 {
	extensionType: string;
	extensionDetails?: string;
	battingSessionUuids?: string[];
	userUuid?: string;
}
