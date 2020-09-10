import { AbstractSensorEventDTOV3 } from './abstract-sensor-event.dto.v3';
import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';

export interface AbstractSensorSessionDTOV3<EVENT extends AbstractSensorEventDTOV3> extends AbstractSyncableDTOV3 {
	userUuid?: string;
	date: string;
	handedness: string;
	extensionType?: string;
	extensionDetails?: string;
	competitionLevelUuid: string;
	playType?: string;
	notes?: string;
	allEvents: EVENT[],
	associatedGroupUuid?: string;
}
