import { AbstractActivityDTOV2 } from './abstract-activity.dto.v2';

export interface PitchingActivityDTOV2 extends AbstractActivityDTOV2 {
	scheduledDate?: string;
	planSessionUuid: string;
	pitchingSessionUuid?: string;
	creatorUuid: string;
}
