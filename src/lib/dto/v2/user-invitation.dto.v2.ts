import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';

export interface UserInvitationDTOV2 extends AbstractSyncableDTOV2 {
	invitorUuid?: string;
	inviteeEmail?: string;
}
