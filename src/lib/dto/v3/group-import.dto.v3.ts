import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';
import { UserProfileBasicsDTOV3 } from './user-profile-basics.dto.v3';

export interface GroupImportDTOV3 extends AbstractSyncableDTOV3 {
	uuid: string;
	groupUuid: string;
	users: UserProfileBasicsDTOV3[];
	sendEmails: boolean;
	canceled: boolean;
	confirmed: boolean;
}
