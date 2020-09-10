import { UserProfileDTOV2 } from './../v2';
import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';

export interface UserToUserConnectionDTOV3 extends AbstractSyncableDTOV3 {
	profile?: UserProfileDTOV2;
	connectionIsInvitor?: boolean;
	confirmed?: boolean;
}
