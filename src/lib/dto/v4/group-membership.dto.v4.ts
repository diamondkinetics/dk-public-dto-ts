import { RoleDTOV2, UserProfileBasicsDTOV2 } from '../v2';
import { AbstractSyncableDTOV4 } from './abstract-syncable.dto.v4';
import { GroupDTOV4 } from './group.dto.v4';

export interface GroupMembershipDTOV4 extends AbstractSyncableDTOV4 {
	user: UserProfileBasicsDTOV2;
	group?: GroupDTOV4;
	invitor?: UserProfileBasicsDTOV2;
	role?: RoleDTOV2;
	roleShort?: string;
	isInvitation: boolean;
	isRequest: boolean;
}
