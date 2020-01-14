import { AbstractActivityDTOV3 } from './abstract-activity.dto.v3';

export interface PitchingActivityDTOV3 extends AbstractActivityDTOV3 {
	scheduledDate?: string;
	planSessionUuid: string;
	pitchingSessionUuid?: string;
	creatorUuid: string;
}
