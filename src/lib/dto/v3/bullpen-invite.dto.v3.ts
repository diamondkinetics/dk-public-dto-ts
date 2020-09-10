import { AbstractTimestampDTOV3 } from './abstract-timestamp.dto.v3';

export interface BullpenInviteDTOV3 extends AbstractTimestampDTOV3 {
	bullpenUuid: string;
	scheduledDate: string;
	participantUuids: string[];
}
