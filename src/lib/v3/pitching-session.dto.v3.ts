import { AbstractSensorSessionDTOV3 } from './abstract-sensor-session.dto.v3';
import { PitchDTOV3 } from './pitch.dto.v3';

export interface PitchingSessionDTOV3 extends AbstractSensorSessionDTOV3<PitchDTOV3> {
	name?: string;
	flagged?: boolean;
	searchable?: boolean;
}
