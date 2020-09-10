import { AbstractSyncableDTOV2 } from './abstract-syncable.dto.v2';
import { UserProfileDTOV2 } from './user-profile.dto.v2';

export interface UserToUserConnectionDTOV2 extends AbstractSyncableDTOV2 {
	invitor?: UserProfileDTOV2;
	invitee?: UserProfileDTOV2;
	confirmed?: boolean;
}
