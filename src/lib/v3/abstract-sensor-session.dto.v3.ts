import { PlayType } from '../enum/play-type';
import { BattingOrientation } from './../enum/batting-orientation';
import { AbstractSensorEventDTOV3 } from './abstract-sensor-event.dto.v3';
import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';

export interface AbstractSensorSessionDTOV3<EVENT extends AbstractSensorEventDTOV3> extends AbstractSyncableDTOV3 {
	userUuid?: string;
	date: string;
	handedness: BattingOrientation;
	extensionType?: string;
	extensionDetails?: string;
	competitionLevelUuid: string;
	playType?: PlayType;
	notes?: string;
	allEvents: EVENT[]
}
