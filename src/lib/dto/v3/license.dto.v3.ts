import { AbstractSyncableDTOV3 } from './abstract-syncable.dto.v3';
import { UserProfileBasicsDTOV3 } from './user-profile-basics.dto.v3';

export interface LicenseDTOV3 extends AbstractSyncableDTOV3 {
	licensee: UserProfileBasicsDTOV3;
	active: boolean;
}
